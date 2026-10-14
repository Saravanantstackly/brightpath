import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";

const courses = [
  {
    id: 1,
    title: "Complete React Development",
    category: "Development",
    level: "Beginner",
    duration: "12 hours",
    price: "Free",
    icon: "⚛️",
    color: "purple",
    description:
      "Learn React fundamentals, components, hooks, and routing by building practical projects.",
  },
  {
    id: 2,
    title: "Python Programming Masterclass",
    category: "Development",
    level: "Beginner",
    duration: "15 hours",
    price: "Free",
    icon: "🐍",
    color: "blue",
    description:
      "Start coding with Python and understand variables, functions, loops, and object-oriented programming.",
  },
  {
    id: 3,
    title: "UI/UX Design Essentials",
    category: "Design",
    level: "Beginner",
    duration: "8 hours",
    price: "Free",
    icon: "🎨",
    color: "pink",
    description:
      "Explore design principles, wireframes, prototypes, and user-friendly digital experiences.",
  },
  {
    id: 4,
    title: "Data Analytics with SQL",
    category: "Data Science",
    level: "Intermediate",
    duration: "10 hours",
    price: "Free",
    icon: "📊",
    color: "green",
    description:
      "Learn SQL queries and develop practical skills for analyzing structured data.",
  },
  {
    id: 5,
    title: "Digital Marketing Fundamentals",
    category: "Business",
    level: "Beginner",
    duration: "6 hours",
    price: "Free",
    icon: "📈",
    color: "orange",
    description:
      "Understand SEO, content marketing, social media, and digital campaign basics.",
  },
  {
    id: 6,
    title: "JavaScript from Zero to Hero",
    category: "Development",
    level: "Intermediate",
    duration: "11 hours",
    price: "Free",
    icon: "💻",
    color: "yellow",
    description:
      "Strengthen your JavaScript skills with modern syntax, DOM concepts, and asynchronous code.",
  },
];

function getEnrolled() {
  try {
    return JSON.parse(localStorage.getItem("brightpath-enrolled")) || [];
  } catch {
    return [];
  }
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("brightpath-user"));
  } catch {
    return null;
  }
}

function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-content">
          <span className="eyebrow">LEARN. GROW. SUCCEED.</span>

          <h1>
            Build your future with <span>BrightPath.</span>
          </h1>

          <p>
            Discover expert-led courses, develop in-demand skills, and take
            the next step in your career.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="primary-btn">
              Explore Courses →
            </Link>
            <Link to="/register" className="secondary-btn">
              Join BrightPath
            </Link>
          </div>

          <div className="hero-trust">
            <div className="avatar-stack">
              <span>👨🏻</span>
              <span>👩🏻</span>
              <span>👨🏽</span>
            </div>
            <div>
              <strong>Learn at your own pace</strong>
              <p>Build skills that move you forward.</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-decoration decoration-one" />
          <div className="hero-decoration decoration-two" />

          <div className="hero-card">
            <div className="hero-card-top">
              <span className="hero-emoji">🎓</span>
              <span className="live-badge">● Start learning</span>
            </div>

            <span className="eyebrow">YOUR NEXT CHAPTER</span>
            <h3>Your next chapter starts here</h3>
            <p>Learn new skills and turn your ambitions into achievements.</p>

            <div className="hero-stat-row">
              <div>
                <strong>06</strong>
                <span>Courses</span>
              </div>
              <div>
                <strong>04</strong>
                <span>Categories</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Your pace</span>
              </div>
            </div>

            <div className="progress-label">
              <span>Your learning journey</span>
              <strong>Ready to start</strong>
            </div>
            <div className="progress-track">
              <div style={{ width: "8%" }} />
            </div>

            <small>Small steps. Big achievements.</small>
          </div>

          <div className="floating-card floating-top">
            <span>✨</span>
            <div>
              <strong>Keep growing</strong>
              <small>One lesson at a time</small>
            </div>
          </div>

          <div className="floating-card floating-bottom">
            <span>🚀</span>
            <div>
              <strong>Future-ready skills</strong>
              <small>Your journey starts today</small>
            </div>
          </div>
        </div>
      </main>

      <section className="stats-strip">
        <div>
          <strong>06+</strong>
          <span>Learning courses</span>
        </div>
        <div>
          <strong>04</strong>
          <span>Skill categories</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Self-paced learning</span>
        </div>
        <div>
          <strong>Anytime</strong>
          <span>Learn your way</span>
        </div>
      </section>

      <section className="page-container featured-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOUR GROWTH</span>
            <h2>Explore popular courses</h2>
            <p>Start with practical skills that make a difference.</p>
          </div>

          <Link to="/courses" className="text-link">
            View all courses →
          </Link>
        </div>

        <div className="course-grid">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">YOUR FUTURE IS WAITING</span>
          <h2>Make today the start of something great.</h2>
          <p>Discover your next skill and move one step closer to your goals.</p>
        </div>

        <Link to="/courses" className="primary-btn">
          Find Your Course →
        </Link>
      </section>
    </>
  );
}

function CourseCard({ course }) {
  const enrolled = getEnrolled();
  const isEnrolled = enrolled.some((item) => item.id === course.id);

  return (
    <article className="course-card">
      <div className={`course-art ${course.color}`}>
        <span className="course-icon">{course.icon}</span>
        <span className="course-category">{course.category}</span>
      </div>

      <div className="course-body">
        <div className="course-meta">
          {course.level} <span>•</span> {course.duration}
        </div>

        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-footer">
          <strong>{course.price}</strong>

          <div className="course-actions">
            <Link to={`/courses/${course.id}`} className="text-link">
              Details
            </Link>

            {isEnrolled && <span className="enrolled-label">✓ Enrolled</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

function Courses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const enrolled = getEnrolled();

  const filtered = courses.filter((course) => {
    const matchesQuery = `${course.title} ${course.description}`
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesQuery && matchesCategory;
  });

  function enroll(course) {
    const current = getEnrolled();

    if (current.some((item) => item.id === course.id)) {
      toast("You are already enrolled in this course!");
      return;
    }

    const updated = [...current, { ...course, progress: 0 }];

    localStorage.setItem("brightpath-enrolled", JSON.stringify(updated));

    toast.success("Successfully enrolled!");

    window.location.reload();
  }

  return (
    <section className="page-container">
      <div className="page-heading">
        <span className="eyebrow">YOUR LEARNING JOURNEY</span>
        <h1>Explore Courses</h1>
        <p>Find the right course to build your skills and reach your goals.</p>
      </div>

      <div className="filters">
        <div className="search-box">
          <span>⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses..."
            aria-label="Search courses"
          />
        </div>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
        >
          {["All", "Development", "Design", "Data Science", "Business"].map(
            (item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            )
          )}
        </select>
      </div>

      <p className="results-count">
        Showing {filtered.length} {filtered.length === 1 ? "course" : "courses"}
      </p>

      <div className="course-grid">
        {filtered.map((course) => {
          const isEnrolled = enrolled.some((item) => item.id === course.id);

          return (
            <article className="course-card" key={course.id}>
              <div className={`course-art ${course.color}`}>
                <span className="course-icon">{course.icon}</span>
                <span className="course-category">{course.category}</span>
              </div>

              <div className="course-body">
                <div className="course-meta">
                  {course.level} <span>•</span> {course.duration}
                </div>

                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <div className="course-footer">
                  <strong>{course.price}</strong>

                  <div className="course-actions">
                    <Link to={`/courses/${course.id}`} className="text-link">
                      Details
                    </Link>

                    <button
                      onClick={() => enroll(course)}
                      className="small-btn"
                      disabled={isEnrolled}
                    >
                      {isEnrolled ? "Enrolled ✓" : "Enroll"}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <span>🔎</span>
          <h3>No courses found</h3>
          <p>Try another keyword or select a different category.</p>
          <button
            className="secondary-btn"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === Number(id));
  const [enrolled, setEnrolled] = useState(() =>
    getEnrolled().some((item) => item.id === Number(id))
  );

  if (!course) {
    return (
      <section className="page-container empty-state">
        <h1>Course not found</h1>
        <Link to="/courses" className="primary-btn">
          Back to courses
        </Link>
      </section>
    );
  }

  function handleEnroll() {
    const current = getEnrolled();

    if (current.some((item) => item.id === course.id)) {
      toast("You are already enrolled!");
      setEnrolled(true);
      return;
    }

    localStorage.setItem(
      "brightpath-enrolled",
      JSON.stringify([...current, { ...course, progress: 0 }])
    );

    setEnrolled(true);
    toast.success("Successfully enrolled!");
  }

  return (
    <section className="page-container details-layout">
      <div className="details-copy">
        <span className="eyebrow">{course.category}</span>
        <h1>{course.title}</h1>
        <p className="details-description">{course.description}</p>

        <div className="details-stats">
          <span>📚 {course.level}</span>
          <span>⏱️ {course.duration}</span>
          <span>🎓 Certificate-ready learning</span>
        </div>

        <h2>What you'll learn</h2>

        <ul className="learning-list">
          <li>Understand the core concepts and fundamentals.</li>
          <li>Practice your knowledge through hands-on exercises.</li>
          <li>Build confidence with practical, real-world skills.</li>
          <li>Track your learning progress at your own pace.</li>
        </ul>

        <button
          className="primary-btn"
          onClick={handleEnroll}
          disabled={enrolled}
        >
          {enrolled ? "✓ You are enrolled" : "Enroll in this course →"}
        </button>

        {enrolled && (
          <p className="success-note">
            This course is now available in your My Learning page.
          </p>
        )}
      </div>

      <div className={`details-art ${course.color}`}>
        <span>{course.icon}</span>
        <h3>{course.category}</h3>
        <p>Learn. Practice. Grow.</p>
      </div>
    </section>
  );
}

function MyLearning() {
  const [enrolled, setEnrolled] = useState(() => getEnrolled());

  function updateProgress(id, progress) {
    const updated = getEnrolled().map((course) =>
      course.id === id ? { ...course, progress: Number(progress) } : course
    );

    localStorage.setItem("brightpath-enrolled", JSON.stringify(updated));
    setEnrolled(updated);

    toast.success(
      Number(progress) === 100
        ? "Congratulations! Course completed."
        : "Progress updated!"
    );
  }

  function removeCourse(id) {
    const updated = getEnrolled().filter((course) => course.id !== id);

    localStorage.setItem("brightpath-enrolled", JSON.stringify(updated));
    setEnrolled(updated);
    toast.success("Course removed from My Learning.");
  }

  return (
    <section className="page-container">
      <div className="page-heading">
        <span className="eyebrow">YOUR PERSONAL SPACE</span>
        <h1>My Learning</h1>
        <p>Keep going! Every lesson brings you closer to your goals.</p>
      </div>

      {enrolled.length === 0 ? (
        <div className="empty-learning">
          <div>📚</div>
          <h2>Your learning journey starts here</h2>
          <p>You haven't enrolled in any courses yet.</p>
          <Link to="/courses" className="primary-btn">
            Browse Courses →
          </Link>
        </div>
      ) : (
        <>
          <div className="learning-summary">
            <div>
              <span>Enrolled courses</span>
              <strong>{enrolled.length}</strong>
            </div>
            <div>
              <span>Completed courses</span>
              <strong>
                {enrolled.filter((course) => course.progress === 100).length}
              </strong>
            </div>
            <div>
              <span>Average progress</span>
              <strong>
                {Math.round(
                  enrolled.reduce(
                    (total, course) => total + Number(course.progress || 0),
                    0
                  ) / enrolled.length
                )}
                %
              </strong>
            </div>
          </div>

          <div className="learning-grid">
            {enrolled.map((course) => (
              <article className="learning-card" key={course.id}>
                <span className={`learning-icon ${course.color}`}>
                  {course.icon}
                </span>

                <div className="learning-info">
                  <span className="eyebrow">{course.category}</span>
                  <h3>{course.title}</h3>
                  <p>
                    {course.duration} · {course.level}
                  </p>

                  <div className="progress-label">
                    <span>Course progress</span>
                    <strong>{course.progress}%</strong>
                  </div>

                  <div
                    className="progress-track"
                    role="progressbar"
                    aria-valuenow={course.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div style={{ width: `${course.progress}%` }} />
                  </div>

                  <label className="progress-control">
                    Update progress
                    <select
                      value={course.progress}
                      onChange={(event) =>
                        updateProgress(course.id, event.target.value)
                      }
                    >
                      {[0, 25, 50, 75, 100].map((number) => (
                        <option key={number} value={number}>
                          {number}% complete
                        </option>
                      ))}
                    </select>
                  </label>

                  {course.progress === 100 && (
                    <span className="completion-badge">
                      ✓ Course completed!
                    </span>
                  )}

                  <button
                    className="remove-course"
                    onClick={() => removeCourse(course.id)}
                  >
                    Remove course
                  </button>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "");

    localStorage.setItem(
      "brightpath-user",
      JSON.stringify({
        name: email.split("@")[0],
        email,
      })
    );

    toast.success("Welcome back!");
    navigate("/my-learning");
  }

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Continue your learning journey."
      onSubmit={handleSubmit}
      buttonText="Log In"
    >
      <label>
        Email address
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          minLength={6}
          required
        />
      </label>

      <p className="form-note">
        Demo login: enter any valid email and a password of at least 6
        characters. This is a frontend demonstration, not a secure
        authentication system.
      </p>
    </AuthLayout>
  );
}

function Register() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "");

    localStorage.setItem(
      "brightpath-user",
      JSON.stringify({ name, email })
    );

    toast.success("Account created successfully!");
    navigate("/courses");
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start learning something amazing today."
      onSubmit={handleSubmit}
      buttonText="Create Account"
    >
      <label>
        Full name
        <input
          name="name"
          placeholder="Your full name"
          autoComplete="name"
          required
        />
      </label>

      <label>
        Email address
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          placeholder="Create a password"
          autoComplete="new-password"
          minLength={6}
          required
        />
      </label>

      <p className="form-note">
        This demo saves your profile in this browser only.
      </p>
    </AuthLayout>
  );
}

function AuthLayout({ title, subtitle, onSubmit, buttonText, children }) {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <Link to="/" className="brand auth-brand">
          <span className="brand-mark">B</span>
          <span>
            bright<span className="brand-highlight">path</span>
          </span>
        </Link>

        <h1>{title}</h1>
        <p>{subtitle}</p>

        <form onSubmit={onSubmit} className="auth-form">
          {children}

          <button className="primary-btn full-btn" type="submit">
            {buttonText} →
          </button>
        </form>

        {buttonText === "Log In" ? (
          <div className="auth-switch">
            New to BrightPath? <Link to="/register">Create an account</Link>
          </div>
        ) : (
          <div className="auth-switch">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        )}
      </div>
    </section>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = getUser();

  function logout() {
    localStorage.removeItem("brightpath-user");
    toast.success("You have logged out.");
    window.location.href = "/";
  }

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">B</span>
        <span>
          bright<span className="brand-highlight">path</span>
          <small>LEARN WITHOUT LIMITS</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
          Courses
        </NavLink>
        <NavLink to="/my-learning" onClick={() => setMenuOpen(false)}>
          My Learning
        </NavLink>
      </nav>

      <div className="nav-actions">
        {user ? (
          <>
            <Link to="/my-learning" className="user-pill">
              👋 {user.name}
            </Link>
            <button className="login-link logout-btn" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <Link to="/login" className="login-link">
            Log in
          </Link>
        )}

        <Link to="/register" className="nav-cta">
          {user ? "Start Learning" : "Get Started"} <span>↗</span>
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="brand footer-brand">
        <span className="brand-mark">B</span>
        <span>
          bright<span className="brand-highlight">path</span>
        </span>
      </Link>

      <p>Empowering learners to build brighter futures.</p>
      <span>© {new Date().getFullYear()} BrightPath. Learn without limits.</span>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/my-learning" element={<MyLearning />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
