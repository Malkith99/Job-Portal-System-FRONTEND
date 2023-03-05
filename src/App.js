import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import StudentRegistrationBasicPage from './components/Pages/StudentRegistrationBasicPage';
import StudentRegistrationUserDetailsPage from './components/Pages/StudentRegistrationUserDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registerStudent" element={<StudentRegistrationBasicPage />} />
        <Route path="/registerStudentUser" element={<StudentRegistrationUserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

