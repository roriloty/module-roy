import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Layout from './components/Layout';
import TabsPanel from './components/TabsPanel';
import QuestionPane from './components/QuestionPane';
import AnswerPane from './components/AnswerPane';
import DownloadPane from './components/DownloadPane';
import { courseData } from './data/modules';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeModuleId, setActiveModuleId] = useState(courseData.modules[0].id);

  // Enhance robustness: if module has no lessons, handle gracefully
  const activeModule = courseData.modules.find(m => m.id === activeModuleId);
  const [activeLessonId, setActiveLessonId] = useState(
    activeModule.lessons.length > 0 ? activeModule.lessons[0].id : null
  );

  // Update activeLesson when activeLessonId changes
  const activeLesson = activeModule.lessons.find(l => l.id === activeLessonId) || null;

  const tabs = [
    {
      id: 'lesson',
      label: 'โจทย์ (Problem)',
      icon: '⚡',
      content: activeLesson ? <QuestionPane lesson={activeLesson} key={`q-${activeLesson.id}`} /> : <div style={{ padding: '2rem' }}>เลือกบทเรียนเพื่อเริ่มต้น</div>
    },
    {
      id: 'answer',
      label: 'เฉลย (Solution)',
      icon: '💡',
      content: activeLesson ? <AnswerPane lesson={activeLesson} key={`a-${activeLesson.id}`} /> : null
    },
    {
      id: 'download',
      label: 'ดาวน์โหลด',
      icon: '⬇️',
      content: <DownloadPane module={activeModule} lesson={activeLesson} key={`d-${activeModule.id}`} />
    }
  ];

  if (showLanding) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  const sidebarContent = (
    <div className="module-list">
      {courseData.modules.map(module => (
        <div key={module.id} className="module-item">
          <h3 style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '0.5rem',
            marginTop: '1rem'
          }}>
            {module.title}
          </h3>
          <ul style={{ listStyle: 'none' }}>
            {module.lessons.map(lesson => (
              <li key={lesson.id} style={{ marginBottom: '4px' }}>
                <button
                  onClick={() => {
                    setActiveModuleId(module.id);
                    setActiveLessonId(lesson.id);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: activeLessonId === lesson.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: activeLessonId === lesson.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                  className="interactive-hover"
                >
                  {lesson.title}
                </button>
              </li>
            ))}
            {module.lessons.length === 0 && (
              <li style={{ padding: '8px 12px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                (กดเพื่อดาวน์โหลด PDF)
                <button
                  onClick={() => {
                    setActiveModuleId(module.id);
                    setActiveLessonId(null);
                  }}
                  style={{
                    display: 'block',
                    marginTop: '5px',
                    background: 'transparent',
                    color: 'var(--primary)',
                    border: '1px solid var(--primary)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  ดูเอกสาร
                </button>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <Layout
      title={activeLesson ? activeLesson.title : activeModule.title}
      sidebarContent={sidebarContent}
      onHome={() => setShowLanding(true)}
    >
      <TabsPanel tabs={tabs} defaultStart={0} />
    </Layout>
  );
}

export default App;
