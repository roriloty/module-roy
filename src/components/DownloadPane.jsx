import React from 'react';

const DownloadPane = ({ module, lesson }) => {
    const downloadFile = (content, filename) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="download-pane anim-fade-in" style={{ padding: '2rem' }}>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '2rem' }}>
                พื้นที่ดาวน์โหลด (Downloads Area)
            </h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Module PDF Section */}
                {module.pdfSrc && (
                    <div style={{
                        background: 'var(--bg-surface)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            📄 เอกสารประกอบการเรียน (Lecture Slides)
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            {module.title}
                        </p>
                        <a
                            href={module.pdfSrc}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                        >
                            เปิด/ดาวน์โหลด PDF
                        </a>
                    </div>
                )}

                {/* Current Lesson Code Section */}
                {lesson && lesson.answer && lesson.answer.content && (
                    <div style={{
                        background: 'var(--bg-surface)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <h3 style={{ color: 'var(--success)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            💾 ซอร์สโค้ดเฉลย (Solution Source Code)
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            ไฟล์: <code style={{ color: 'var(--primary)' }}>{lesson.answer.fileName || 'source.cpp'}</code>
                        </p>
                        <button
                            onClick={() => downloadFile(lesson.answer.content, lesson.answer.fileName || 'solution.cpp')}
                            className="btn-primary"
                            style={{ background: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        >
                            ดาวน์โหลด Code (.cpp)
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DownloadPane;
