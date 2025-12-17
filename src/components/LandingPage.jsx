import React from 'react';
import '../styles/features/Landing.css';

const LandingPage = ({ onStart }) => {
    return (
        <div className="landing-container">
            <div className="landing-content">
                <div className="brand-badge">✨ Interactive Learning Platform</div>

                <h1 className="hero-title">
                    Module 101 (โมดูล 101)<br />
                    <span style={{ fontSize: '0.6em', opacity: 0.8, fontWeight: 500 }}>Programming Mastery</span>
                </h1>

                <p className="hero-subtitle">
                    เรียนรู้การเขียนโปรแกรมภาษา C++ ตั้งแต่พื้นฐานจนถึงระดับสูง
                    ผ่านบทเรียนแบบโต้ตอบและแผนการเรียนที่เข้าใจง่าย
                </p>

                <button className="start-btn" onClick={onStart}>
                    เข้าสู่บทเรียน (Start Learning) 🚀
                </button>
            </div>

            <footer className="landing-footer">
                <a
                    href="https://github.com/roriloty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <span>GITHUB</span>
                </a>
                <a
                    href="https://www.instagram.com/roriloty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <span>INSTAGRAM</span>
                </a>
            </footer>
        </div>
    );
};

export default LandingPage;
