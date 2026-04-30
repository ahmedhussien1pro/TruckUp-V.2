export interface QuestionOption {
  id: string
  label: string
  scores: {
    power: number
    embedded: number
    communications: number
  }
}

export interface Question {
  id: number
  text: string
  category: string
  options: QuestionOption[]
}

export const TOTAL_QUESTIONS = 15

export const questions: Question[] = [
  {
    id: 1,
    text: "When you imagine yourself working 10 years from now, which environment fits best?",
    category: "work_environment",
    options: [
      { id: "a", label: "A power facility, substation, or energy grid", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "A lab designing and testing embedded devices", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "A telecom center or wireless systems lab", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "A technical office doing analysis and simulation", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 2,
    text: "Which type of problem excites you most?",
    category: "problem_interest",
    options: [
      { id: "a", label: "Why is this power grid failing under peak load?", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "Why is this microcontroller not responding as expected?", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "Why is this wireless signal degraded or lost?", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "How do I design a system that is efficient and reliable?", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 3,
    text: "Which real-world system interests you the most?",
    category: "interest_area",
    options: [
      { id: "a", label: "Solar farms, power grids, and transformers", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "Smart sensors, robotics, and IoT devices", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "5G networks, satellites, and wireless communication", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "Industrial automation and control systems", scores: { power: 1, embedded: 2, communications: 0 } },
    ],
  },
  {
    id: 4,
    text: "Which subject felt most natural or enjoyable to you?",
    category: "academic_fit",
    options: [
      { id: "a", label: "Electrical machines, transformers, and power circuits", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "Digital electronics and microprocessors", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "Signals, systems, and Fourier analysis", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "Electric circuit analysis and network theorems", scores: { power: 2, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 5,
    text: "How do you prefer to work?",
    category: "work_style",
    options: [
      { id: "a", label: "In the field, on-site with physical installations", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "At a workbench combining hardware and code", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "At a desk using simulations and mathematical models", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "In a structured technical environment with clear specs", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 6,
    text: "What kind of output do you want from your work?",
    category: "output_preference",
    options: [
      { id: "a", label: "Physical energy infrastructure that powers cities", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "A working embedded device or hardware product", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "A communication system, protocol, or signal solution", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "A complete system integrating hardware and software", scores: { power: 0, embedded: 2, communications: 1 } },
    ],
  },
  {
    id: 7,
    text: "How do you feel about working with physical electrical equipment?",
    category: "hardware_comfort",
    options: [
      { id: "a", label: "Very comfortable — I want hands-on work with real equipment", scores: { power: 3, embedded: 1, communications: 0 } },
      { id: "b", label: "Comfortable with low-voltage and circuit-level hardware", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "I prefer software tools, simulations, and testing", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "Fine with both hardware and software environments", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 8,
    text: "Which industry excites you the most?",
    category: "industry_interest",
    options: [
      { id: "a", label: "Renewable energy, utilities, and power infrastructure", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "Consumer electronics, robotics, and automotive", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "Telecommunications, networking, and satellite systems", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "Industrial systems and smart manufacturing", scores: { power: 1, embedded: 2, communications: 0 } },
    ],
  },
  {
    id: 9,
    text: "What draws your attention more?",
    category: "curiosity_focus",
    options: [
      { id: "a", label: "The efficiency of large-scale power transmission systems", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "How a tiny chip runs complex real-time logic", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "How data travels wirelessly across long distances", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "How different engineering systems interact and integrate", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 10,
    text: "How do you handle long, systematic debugging or fault analysis?",
    category: "debugging_style",
    options: [
      { id: "a", label: "I enjoy it — tracing faults step by step is satisfying", scores: { power: 1, embedded: 3, communications: 1 } },
      { id: "b", label: "I prefer designing things correctly from the start", scores: { power: 2, embedded: 0, communications: 1 } },
      { id: "c", label: "I use tools and simulations to isolate issues quickly", scores: { power: 0, embedded: 1, communications: 3 } },
      { id: "d", label: "I find it manageable with a structured approach", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 11,
    text: "How important is it that your work result is physically visible?",
    category: "tangibility",
    options: [
      { id: "a", label: "Very important — I want to see the infrastructure I built", scores: { power: 3, embedded: 1, communications: 0 } },
      { id: "b", label: "Important — I want to hold and test what I built", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "Not critical — results shown through data and metrics are fine", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "Moderately important", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 12,
    text: "Which project description sounds most interesting to you?",
    category: "project_preference",
    options: [
      { id: "a", label: "Designing protection systems for an electrical substation", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "Programming a real-time controller for a robotic arm", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "Designing a digital modulation scheme for a wireless link", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "Building a monitoring system for an industrial plant", scores: { power: 1, embedded: 2, communications: 1 } },
    ],
  },
  {
    id: 13,
    text: "What type of math do you find more manageable or enjoyable?",
    category: "math_preference",
    options: [
      { id: "a", label: "Circuit analysis, differential equations, and power calculations", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "Digital logic, Boolean algebra, and binary systems", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "Fourier transforms, frequency analysis, and probability", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "General engineering math — no strong preference", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 14,
    text: "How comfortable are you with writing code as part of your daily work?",
    category: "coding_comfort",
    options: [
      { id: "a", label: "Not interested — I prefer hardware and system design", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "Very comfortable — I enjoy low-level C and firmware", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "Comfortable with MATLAB, Python, or simulation tools", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "Comfortable at a moderate level across different tools", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
  {
    id: 15,
    text: "If you could choose your first job today, which role fits you best?",
    category: "career_direction",
    options: [
      { id: "a", label: "Power systems engineer at an energy utility company", scores: { power: 3, embedded: 0, communications: 0 } },
      { id: "b", label: "Firmware or embedded engineer at an electronics company", scores: { power: 0, embedded: 3, communications: 0 } },
      { id: "c", label: "RF or signal processing engineer at a telecom company", scores: { power: 0, embedded: 0, communications: 3 } },
      { id: "d", label: "Systems integration engineer across multiple domains", scores: { power: 1, embedded: 1, communications: 1 } },
    ],
  },
]
