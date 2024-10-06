# nasa_space_apps_hackaton_2024

## Galaxy Dance: An Interactive Game for Astronauts

Space-themed game designed for astronauts in microgravity environments. The game enables astronauts to follow complex, music-synchronized dance routines and recreate cosmic shapes like constellations using their bodies. Through a **real-time motion tracking system**, the game maps their movements, offering both entertainment and physical activity.

The game uses **pose estimation technology** to track key body points, such as elbows, knees, and torso, connecting them with lines to visualize and compare movements against predefined routines or shapes. The system scores the astronaut’s accuracy, provides immediate feedback, and transmits visuals back to Earth, where **Earth-based participants** can observe or suggest challenges. 

**Galaxy Dance** promotes **physical fitness**, helps prevent injuries with mild stretches, and enhances mental well-being by reducing boredom and stress. It fosters **friendly rivalry**, teamwork, and social interaction, which are essential for long-duration missions. The game also strengthens the **Earth-space connection**, boosting morale through audience participation.

Developed using **Python** and machine learning algorithms like **MMPose**, the game integrates with standard onboard hardware for seamless use in daily life on a space station.


This repo contains:

  - kukan_ui : an interactive demo UI. Developed using ReactJS, it shows an interactive prototype that contains the main screens of the "Galaxy Dance" app: a web-based application that can be used in any device that can use a modern web browser (currently, connection with the backend is simulated and evaluation of "dancer" movements in the video are simulated). Considering bandwidth limitations in space, resolution is optimized for 850x750px. In order to launch the user interface, follow the README.md in the 'kukan_ui' folder