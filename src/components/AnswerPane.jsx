import React from 'react';

const AnswerPane = ({ lesson }) => {
    const { answer } = lesson;

    return (
        <div className="answer-pane anim-slide-right" style={{ maxWidth: '800px', paddingBottom: '3rem' }}>
            <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid rgba(var(--hue-success), 50%, 50%, 0.2)'
            }}>
                <h2 style={{ color: 'var(--success)', marginBottom: '1rem' }}>
                    {answer.title}
                </h2>

                {/* Text Content */}
                {answer.content && !answer.language && (
                    <div className="markdown-body" style={{ borderLeftColor: 'var(--success)' }}>
                        {answer.content}
                    </div>
                )}

                {/* Answer Image (e.g. Flowchart) */}
                {answer.imageSrc && (
                    <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                        <img
                            src={answer.imageSrc}
                            alt="Answer Logic"
                            style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
                        />
                    </div>
                )}

                {/* Code Snippet */}
                {answer.language && (
                    <div style={{ position: 'relative', marginTop: '1rem' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '10px',
                            background: '#333',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            color: '#fff'
                        }}>
                            C++
                        </div>
                        <pre style={{
                            background: '#1a1a2e',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            overflowX: 'auto',
                            border: '1px solid rgba(255,255,255,0.1)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            color: '#d4d4d4'
                        }}>
                            <code>{answer.content}</code>
                        </pre>
                        <button
                            onClick={() => navigator.clipboard.writeText(answer.content)}
                            style={{
                                marginTop: '0.5rem',
                                background: 'transparent',
                                color: 'var(--primary)',
                                fontSize: '0.85rem'
                            }}
                        >
                            คัดลอกโค้ด (Copy Code)
                        </button>
                    </div>
                )}

                <div style={{ marginTop: '2rem' }}>
                    <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>สรุป (Key Takeaway)</h4>
                    <p style={{ fontSize: '1.1rem' }}>
                        {lesson.question.correctIndex !== undefined
                            ? `คำตอบที่ถูกต้องคือข้อ ${String.fromCharCode(65 + lesson.question.correctIndex)}`
                            : ''}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AnswerPane;
