import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Tambahkan state untuk admin
  const [adminPassword, setAdminPassword] = useState(''); // Tambahkan state untuk password admin

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

  const openLogin = () => setActiveModal('login');
  const openSignup = () => setActiveModal('signup');
  const closeModal = () => setActiveModal(null);

  const openAdminPanel = () => {
    const password = prompt("Masukkan password admin:"); // Minta password dari pengguna
    if (password === '123') { // Ganti 'yourAdminPassword' dengan password yang diinginkan
      setIsAdmin(true);
    } else {
      alert("Password salah!");
    }
  };

  useEffect(() => {
    // Simpan username dan password admin di localStorage (hanya untuk contoh, sebaiknya gunakan metode yang lebih aman)
    localStorage.setItem('adminUser', 'admin'); // Ganti dengan username admin yang diinginkan
    localStorage.setItem('adminPassword', '123'); // Ganti dengan password admin yang diinginkan

    const token = localStorage.getItem('userToken');
    setIsLoggedIn(!!token);
    // Tambahkan logika untuk memeriksa apakah pengguna adalah admin
    const userRole = localStorage.getItem('userRole'); // Misalnya, ambil dari localStorage
    setIsAdmin(userRole === 'admin');
  }, []);

  const ProtectedRoute = ({ children, adminOnly }) => {
    if (adminOnly) { // Langsung masuk ke halaman admin tanpa login
      return <Navigate to="/admin" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Navbar activeModal={activeModal} setActiveModal={setActiveModal} isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.main
                className="flex-grow pt-16 bg-gray-300"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
                <Menu />
                <About />
                <Contact />
              </motion.main>
            } />
            <Route path="/admin" element={
              <ProtectedRoute adminOnly>
                <AdminPanel /> {}
              </ProtectedRoute>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Login isOpen={activeModal === 'login'} onClose={closeModal} openSignup={openSignup} setIsLoggedIn={setIsLoggedIn} />
        <Signup isOpen={activeModal === 'signup'} onClose={closeModal} openLogin={openLogin} />
      </div>
    </Router>
  );
}

// Tambahkan komponen AdminPanel di sini
const AdminPanel = () => {
  return <div>Admin Panel</div>;
};

export default App;