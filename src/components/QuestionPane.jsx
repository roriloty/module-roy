import React, { useState } from 'react';
import '../styles/features/Question.css';

const QuestionPane = ({ lesson }) => {
    const { question } = lesson;

    return (
        <div className="question-pane anim-fade-in">
            <div className="lesson-content">
                <h2>{lesson.title}</h2>
                <div className="description">{lesson.description}</div>

                {/* Instruction Text */}
                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--primary)',
                    marginBottom: '1.5rem',
                    marginTop: '1rem',
                    fontSize: '1rem',
                    color: 'var(--text-primary)'
                }}>
                    <strong>คำสั่ง (Exercise):</strong> {question.text}
                </div>

                {/* Question Image */}
                {question.type === 'image' && (
                    <div className="question-image-container">
                        <img
                            src={question.imageSrc}
                            alt="Question Assignment"
                            className="question-img"
                            onClick={() => window.open(question.imageSrc, '_blank')}
                        />
                        <p className="image-hint">(คลิกที่รูปเพื่อขยาย)</p>
                    </div>
                )}

                {/* If no image, maybe show a placeholder info */}
                {question.type === 'text' && !question.imageSrc && (
                    <div style={{
                        padding: '2rem',
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        border: '2px dashed #444',
                        borderRadius: '12px'
                    }}>
                        ให้นักเรียนเขียนโปรแกรมตามคำสั่งด้านบนลงใน IDE ของตนเอง
                    </div>
                )}
            </div>

        </div>
    );
};

export default QuestionPane;
