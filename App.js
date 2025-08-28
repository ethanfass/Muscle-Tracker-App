import React, { useState } from "react";
import "./App.css";
import bodyGram from "./2body.JPG";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [savedOptions, setSavedOptions] = useState([]);
  const [showAllMuscles, setShowAllMuscles] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const options = [
    { name: "Arnold Press", muscles: { delts: 1, shoulders: 0.5, triceps: 0.5, traps: 0.25 } },
    { name: "Bench Press", muscles: { chest: 1, delts: 0.25, triceps: 0.25 } },
    { name: "Bent-over Row", muscles: { lats: 1, traps: 0.5, delts: 0.25, biceps: 0.25 } },
    { name: "Bicep Curl", muscles: { biceps: 1, forearms_front: 0.5 } },
    { name: "Calf Extension", muscles: { calves: 1 } },
    { name: "Calf Press", muscles: { calves: 1 } },
    { name: "Calf Raise", muscles: { calves: 1 } },
    { name: "Chest Dip", muscles: { chest: 1, delts: 0.25, triceps: 0.25 } },
    { name: "Chest Press", muscles: { chest: 1, delts: 0.25, triceps: 0.25 } },
    { name: "Chest Pullover", muscles: { chest: 1, lats: 0.25, triceps: 0.25, delts: 0.25, rhomboids: 0.25 } },
    { name: "Close Grip Bench Press", muscles: { triceps: 1, chest: 0.5, delts: 0.25 } },
    { name: "Crunch", muscles: { core: 1, obliques: 0.25 } },
    { name: "Deadlift", muscles: { glutes: 1, quads: 0.5, hamstrings: 0.25 } },
    { name: "Face Pulls", muscles: { delts: 1, traps: 0.5 } },
    { name: "Farmer Walk", muscles: { forearms_front: 1, traps: 0.5, core: 0.5 } },
    { name: "Fly", muscles: { chest: 1, delts: 0.25, triceps: 0.25 } },
    { name: "Front Lateral Raise", muscles: { delts: 1, traps: 0.5, shoulders: 0.25, forearms_front: 0.25 } },
    { name: "Front Raise", muscles: { delts: 1, chest: 0.5, shoulders: 0.25, traps: 0.25 } },
    { name: "Glute-Ham Raise", muscles: { hamstrings: 1, glutes: 0.75 } },
    { name: "Glute Kickback", muscles: { glutes: 1, adductors: 0.5 } },
    { name: "Good-morning", muscles: { lower_back: 1, glutes: 0.5, hamstrings: 0.25 } },
    { name: "Hack Squat", muscles: { glutes: 1, quads: 1 } },
    { name: "Hammer Curl", muscles: { forearms_front: 1, biceps: 0.5, forearms_back: 0.5 } },
    { name: "Hip Abduction", muscles: { abductors: 1, glutes: 0.5, quads: 0.5 } },
    { name: "Hip Extension", muscles: { glutes: 1, hamstrings: 0.75 } },
    { name: "Hip Internal Rotation", muscles: { glutes: 1, quads: 0.5 } },
    { name: "Inverted Biceps Row", muscles: { biceps: 1, lats: 0.5, traps: 0.25, delts: 0.25, forearms_front: 0.5 } },
    { name: "Leg Curl", muscles: { hamstrings: 1, calves: 0.5 } },
    { name: "Leg Press", muscles: { glutes: 1, quads: 0.75 } },
    { name: "Leg Raise", muscles: { core: 1} },
    { name: "Lateral Neck Flexion", muscles: { neck: 1, traps: 0.5, obliques: 0.25, core: 0.25, lower_back: 0.25 } },
    { name: "Lat Pullover", muscles: { lats: 1, chest: 0.25, triceps: 0.25, teres_major: 0.25, shoulders: 0.25, traps: 0.25 } },
    { name: "Lunge", muscles: { glutes: 1, quads: 0.5 } },
    { name: "Military Press", muscles: { delts: 1, chest: 0.5, triceps: 0.5, shoulders: 0.25, traps: 0.25 } },
    { name: "Neck Extension", muscles: { neck: 1, traps: 0.5, lower_back: 0.25, shoulders: 0.25 } },
    { name: "Neck Flexion", muscles: { neck: 1 } },
    { name: "Pike Press", muscles: { delts: 1, triceps: 0.5, chest: 0.25, shoulders: 0.25, traps: 0.25 } },
    { name: "Planks", muscles: { core: 1, shoulders: 0.5, glutes: 0.5 } },
    { name: "Pull-up/Chin-up", muscles: { lats: 1, biceps: 0.5, traps: 0.25, delts: 0.25, rhomboids: 0.25 } },
    { name: "Push-down", muscles: { triceps: 1 } },
    { name: "Push-up", muscles: { chest: 1, delts: 0.25, triceps: 0.25 } },
    { name: "Reverse Curl", muscles: { forearms_front: 1, biceps: 0.25 } },
    { name: "Reverse Fly", muscles: { delts: 1, traps: 0.5, shoulders: 0.25 } },
    { name: "Reverse Wrist Curl", muscles: { forearms_back: 1 } },
    { name: "Russian Twists", muscles: { obliques: 1, core: 0.5 } },
    { name: "Shrug", muscles: { traps: 1, neck: 0.25 } },
    { name: "Side Bend", muscles: { obliques: 1, lower_back: 0.25 } },
    { name: "Side Crunch", muscles: { obliques: 1, lower_back: 0.25 } },
    { name: "Side Planks", muscles: { obliques: 1, core: 0.5, shoulders: 0.5 } },
    { name: "Sit-up", muscles: { core: 1, quads: 0.25, obliques: 0.25 } },
    { name: "Squat", muscles: { glutes: 1, quads: 0.5 } },
    { name: "Step Down", muscles: { glutes: 1, quads: 0.75 } },
    { name: "Step-up", muscles: { glutes: 1, quads: 0.5, calves: 0.25 } },
    { name: "Triceps Dip", muscles: { triceps: 1, chest: 0.5, delts: 0.25, lats: 0.25, biceps: 0.25 } },
    { name: "Triceps Extension", muscles: { triceps: 1 } },
    { name: "Twist", muscles: { obliques: 1, lower_back: 0.25 } },
    { name: "Upright Row", muscles: { delts: 1, shoulders: 0.5, traps: 0.25, biceps: 0.5 } },
    { name: "V-Squat", muscles: { glutes: 1, quads: 0.75 } },
    { name: "Wrist Curl", muscles: { forearms_front: 1 } },
    { name: "Wrist Pronation", muscles: { forearms_front: 1 } },
    { name: "Wrist Supination", muscles: { forearms_front: 1, biceps: 0.25 } }
  ]


  


  const filteredOptions = options.filter(
    (option) =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedOptions.includes(option.name)
  );

  const addOption = (option) => {
    setSelectedOptions([...selectedOptions, option.name]);
    setSearchTerm("");
  };

  const removeOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  // Calculate total muscle group values
  const muscleGroups = {
    abductors: 0,
    forearms_back: 0,
    forearms_front: 0,
    biceps: 0,
    calves: 0,
    core: 0,
    chest: 0,
    delts: 0,
    glutes: 0,
    hamstrings: 0,
    lats: 0,
    lower_back: 0,
    neck: 0,
    obliques: 0,
    quads: 0,
    rhomboids: 0,
    shoulders: 0,
    traps: 0,
    triceps: 0
  };

  selectedOptions.forEach((optionName) => {
    const exercise = options.find((opt) => opt.name === optionName);
    if (exercise) {
      Object.keys(exercise.muscles).forEach((muscle) => {
        muscleGroups[muscle] += exercise.muscles[muscle];
      });
    }
  });

  // Map muscle value to color (reverse rainbow)
  function valueToColor(value) {
    const min = 0;
    const max = 6; // Set an appropriate max value

    // Ensure ratio is between 0 and 1
    const ratio = Math.min(Math.max((value - min) / (max - min), 0), 1);

    const colors = [
      { r: 128, g: 128, b: 128}, //gray
      { r: 128, g: 0, b: 255 }, // purple
      { r: 0, g: 0, b: 255 },  // blue
      { r: 0, g: 255, b: 0 },   // green
      { r: 255, g: 255, b: 0 }, // yellow
      { r: 255, g: 128, b: 0 }, // orange
      { r: 255, g: 0, b: 0 }    // red
    ];

    // Ensure the color indices are within bounds
    const startIndex = Math.floor(ratio * (colors.length - 1));
    const endIndex = Math.min(Math.ceil(ratio * (colors.length - 1)), colors.length - 1);

    const startColor = colors[startIndex] || { r: 0, g: 0, b: 0 };
    const endColor = colors[endIndex] || { r: 0, g: 0, b: 0 };

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * (ratio * (colors.length - 1) - startIndex));
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * (ratio * (colors.length - 1) - startIndex));
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * (ratio * (colors.length - 1) - startIndex));

    return `rgb(${r}, ${g}, ${b})`;
  }

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const [isWorkoutsPopupVisible, setWorkoutsPopupVisible] = useState(false);

  const toggleWorkoutsPopup = () => {
    setWorkoutsPopupVisible(!isWorkoutsPopupVisible);
  };

  const saveWorkout = () => {
    if (selectedOptions.length === 0) {
      alert("You must select at least one exercise before saving.");
      return;
    }

    const workoutName = prompt("Enter a name for your workout:");
    if (workoutName && workoutName.trim() !== "") {
      setSavedOptions((prevSavedOptions) => [
        ...prevSavedOptions,
        { name: workoutName.trim(), exercises: [...selectedOptions] }
      ]);
    } else {
      alert("Workout must have a name.");
    }
  };

  const loadWorkout = (exercises) => {
    setSelectedOptions(exercises);
    toggleWorkoutsPopup();
  };

  const deleteWorkout = (index) => {
    setSavedOptions(savedOptions.filter((_, i) => i !== index));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderMuscleCircle = (cx, cy, r, muscleKey, label = null) => (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={valueToColor(muscleGroups[muscleKey])}
      className="muscle-circle"
    >
      <title>{label || muscleKey.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</title>
    </circle>
  );
  




  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
          <button
            className={`dark-mode-toggle ${darkMode ? "light" : "dark"}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
      <h1 className="mainhead">Muscle Tracker App</h1>
      <div className="rada"></div>
      <h2 className="exerhead">Selected Exercises</h2>
      <h2 className="bodyhead">Body Diagram</h2>

      <div className="box">
        <div className="text-row">
          <span className="left-text">Not enough</span>
          <span className="center-text">Just enough</span>
          <span className="right-text">More than enough</span>
        </div>
        <div className="gradient-bar">
          <span className="bar-number left">0 sets</span>
          <span className="bar-number center">9 sets</span>
          <span className="bar-number right">18 sets</span>
        </div>
      </div>

      <button className="setask" onClick={togglePopup}>
        How Many Sets Should I Be Doing?
      </button>

      {isPopupVisible && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
          <h2>Recommended Sets Per Workout</h2>
          <p>💪 <strong>How many sets should you do?</strong></p>
          <p>The ideal number of sets depends on your <strong>training goal</strong>. Whether you're aiming to get stronger, grow muscle, or increase endurance, here’s a general guideline:</p>

          <p><strong>✅ Total Sets Per Workout (Goal-Based):</strong></p>
          <ul>
            <li><strong>Strength:</strong> 12–20 total sets (fewer reps, heavier weight, longer rest)</li>
            <li><strong>Hypertrophy (Muscle Growth):</strong> 15–25 total sets (moderate reps, moderate weight, short rest)</li>
            <li><strong>Endurance:</strong> 18–30 total sets (higher reps, lighter weight, minimal rest)</li>
          </ul>

          <p><strong>✅ Sets Per Muscle Group (Per Workout):</strong></p>
          <ul>
            <li><strong>Large muscles (Chest, Back, Legs):</strong> 10–16 sets</li>
            <li><strong>Smaller muscles (Biceps, Triceps, Shoulders):</strong> 8–12 sets</li>
          </ul>
          <p>If you're training each muscle group twice a week, split your sets evenly across sessions.</p>

          <p><strong>🛠 Key Factors:</strong></p>
          <ul>
            <li>Training close to <strong>failure</strong>? You might not need as many sets.</li>
            <li>Experiencing too much fatigue or soreness? <strong>Scale back your volume.</strong></li>
            <li>Higher training frequency = <strong>lower sets per session.</strong></li>
          </ul>

          <p><strong>⚡ Example (Push Day Workout for Hypertrophy):</strong></p>
          <ul>
            <li><strong>Chest:</strong> 10–12 sets (e.g., bench press, flyes)</li>
            <li><strong>Shoulders:</strong> 6–9 sets (e.g., overhead press, lateral raises)</li>
            <li><strong>Triceps:</strong> 6–9 sets (e.g., dips, pushdowns)</li>
          </ul>
          <p><strong>Total:</strong> ~20–30 sets</p>

          <p><strong>👉 Tailor your volume based on recovery, intensity, and goals. Train smart, not just hard! 🚀</strong></p>

            <button className="close-btn" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}

      <button className="showall" onClick={() => setShowAllMuscles(!showAllMuscles)}>
        {showAllMuscles ? "Show Active Muscles Only" : "Show All Muscles"}
      </button>

      <button className="save-btn" onClick={saveWorkout}>Save Workout</button>

      <button className="view-btn" onClick={toggleWorkoutsPopup}>View Workouts</button>


      {isWorkoutsPopupVisible && ( 
        <div className="popup-overlay" onClick={toggleWorkoutsPopup}>
          <div className="popup-box workout-popup" onClick={(e) => e.stopPropagation()}>
            {savedOptions.length > 0 ? (
              <div className="workout-list">
                {savedOptions.map((workout, index) => (
                  <div key={index} className="workout-item">
                    <p className="workout-title">
                      <strong>Workout {index + 1}:</strong> {workout.name}
                    </p>
                    <p className="workout-exercises">{workout.exercises.join(", ")}</p>
                    <div className="workout-buttons">
                      <button className="load-btn" onClick={() => loadWorkout(workout.exercises)}>Load</button>
                      <button className="delete-btn" onClick={() => deleteWorkout(index)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontWeight: "bold" }}>No saved workouts yet.</p>
            )}
            <button className="close-btn" onClick={toggleWorkoutsPopup}>Close</button>
          </div>
        </div>
      )}

      <div className="center-box">
        <ul>
          {Object.entries(muscleGroups)
            .filter(([muscle, score]) => showAllMuscles || score > 0) // Filtering logic
            .map(([muscle, score]) => {
              let displayName = muscle
                .replace(/_/g, " ") // Replace underscores with spaces
                .charAt(0).toUpperCase() + muscle.replace(/_/g, " ").slice(1); // Capitalize first letter

              if (muscle === "forearms_front") displayName = "Forearms (front)";
              if (muscle === "forearms_back") displayName = "Forearms (back)";

              return <li key={muscle}>{displayName}: <strong>{score}</strong></li>;
            })}
        </ul>
        
        {/* Default message when no muscles are displayed */}
        {Object.entries(muscleGroups)
          .filter(([muscle, score]) => showAllMuscles || score > 0)
          .length === 0 && (
            <p>No active muscles</p>
        )}
      </div>


      <div className="input-container">
        <input
          type="text"
          placeholder="Search for an exercise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <div className="selected-options">
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option, index) => (
              <div key={index} className="selected-option">
                {option} <button onClick={() => removeOption(option)} className="remove-button">×</button>
              </div>
            ))
          ) : (
            <span className="placeholder-text">No exercises selected</span> // Placeholder for empty state
          )}
        </div>
      </div>

      {searchTerm && filteredOptions.length > 0 && (
        <ul className="dropdown-list">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => addOption(option)}
              className="dropdown-item"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
      
      {/* Body Diagram with SVG Circles */}
      <div className="body-image-container">
        <img src={bodyGram} alt="body diagram" className="body-image" />
          <svg className="body-diagram" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
            {renderMuscleCircle(60, 147, 22, "chest")}
            {renderMuscleCircle(124, 147, 22, "chest")}
            {renderMuscleCircle(21, 122, 10, "shoulders")}
            {renderMuscleCircle(162, 122, 10, "shoulders")}
            {renderMuscleCircle(255, 180, 11, "triceps")}
            {renderMuscleCircle(403, 180, 11, "triceps")}
            {renderMuscleCircle(66.8, 380, 10, "quads")}
            {renderMuscleCircle(125.3, 380, 10, "quads")}
            {renderMuscleCircle(305.4, 300, 18, "glutes")}
            {renderMuscleCircle(354.2, 300, 18, "glutes")}
            {renderMuscleCircle(18, 185, 11, "biceps")}
            {renderMuscleCircle(168, 185, 11, "biceps")}
            {renderMuscleCircle(76.5, 203, 8, "core")}
            {renderMuscleCircle(110, 203, 8, "core")}
            {renderMuscleCircle(108.5, 237, 7, "core")}
            {renderMuscleCircle(78.5, 237, 7, "core")}
            {renderMuscleCircle(79.5, 260.5, 5, "core")}
            {renderMuscleCircle(107.5, 260.5, 5, "core")}
            {renderMuscleCircle(106, 285, 6.5, "core")}
            {renderMuscleCircle(81, 285, 6.5, "core")}
            {renderMuscleCircle(52, 260, 6, "obliques")}
            {renderMuscleCircle(134, 260, 6, "obliques")}
            {renderMuscleCircle(308, 460, 12, "calves")}
            {renderMuscleCircle(350, 460, 12, "calves")}
            {renderMuscleCircle(310, 380, 15, "hamstrings")}
            {renderMuscleCircle(350, 380, 15, "hamstrings")}
            {renderMuscleCircle(15.2, 260, 9, "forearms_front", "Forearms (front)")}
            {renderMuscleCircle(173, 260, 9, "forearms_front", "Forearms (front)")}
            {renderMuscleCircle(252.5, 270, 9, "forearms_back", "Forearms (back)")}
            {renderMuscleCircle(407.5, 270, 9, "forearms_back", "Forearms (back)")}
            {renderMuscleCircle(83.5, 340, 7, "abductors")}
            {renderMuscleCircle(105.7, 340, 7, "abductors")}
            {renderMuscleCircle(295.5, 190, 17, "lats")}
            {renderMuscleCircle(363.5, 190, 17, "lats")}
            {renderMuscleCircle(252, 135, 9, "delts")}
            {renderMuscleCircle(405, 135, 9, "delts")}
            {renderMuscleCircle(316, 98, 7, "traps")}
            {renderMuscleCircle(342, 98, 7, "traps")}
            {renderMuscleCircle(90, 99, 10, "neck")}
            {renderMuscleCircle(314, 132, 10, "rhomboids")}
            {renderMuscleCircle(345, 132, 10, "rhomboids")}
        </svg>
      </div>
      
    </div>
  );
}

export default App;
