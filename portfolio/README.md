# Interactive Reality Simulators - Portfolio

This is the source code for my personal portfolio, designed as an "Interactive Atlas of Misunderstood Systems". It showcases high-fidelity 3D simulations, interactive models, and my engineering journey.

## Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with custom glass/neon theme)
- **3D Graphics:** [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **State Management:** Zustand (for complex simulation states)
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Project Structure

- `src/app`: App Router pages (Home, Projects, About, Resume, Contact)
- `src/components/canvas`: 3D scenes and R3F components (Hero "Atlas")
- `src/components/ui`: Reusable UI components (Buttons, Badges, Inputs)
- `src/lib`: Data layers and utilities
  - `projects.ts`: Central configuration for all showcased projects

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Amritesh/Lab.git
    cd Lab/portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Visit [http://localhost:3000](http://localhost:3000)

## Customization Guide

### Adding New Projects
Edit `src/lib/projects.ts`. The type definition `Project` ensures you provide all necessary fields (domain, tech, simulation details).

### Updating Resume
Replace the file at `public/resume.pdf` with your latest version. The Resume page automatically embeds this file.

### Modifying the 3D Hero
The "Atlas" scene is located in `src/components/canvas/hero-scene.tsx`. It uses procedural geometry and shaders to create the floating data plate effect.

## License

MIT License.
