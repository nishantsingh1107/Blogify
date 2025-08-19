import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useAppContext } from "./contexts/appContext";
import { BounceLoader } from "react-spinners";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CreateBlogPage } from "./pages/CreateBlogPage";
import { EditBlogPage } from "./pages/EditBlogPage";
import { MyBlogsPage } from "./pages/MyBlogsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AboutPage } from "./pages/AboutPage";
import { ViewBlogPage } from "./pages/ViewBlogPage";

const App = () => {
  const { appLoading, user } = useAppContext();
  const { isAuthenticated } = user;

  if (appLoading) {
    return (
      <div className="min-h-[100vh] flex flex-col items-center justify-center gap-10 content-center">
        <BounceLoader size={175} color="#2020ff" />
        <div className="border-1 border-lime-800 p-8 rounded-lg">
          <p>Please note:</p>
          <p>Backend is hosted on free server</p>
          <p>It may take upto 2 minutes to warmup (for the first time)!</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog/:id" element={<ViewBlogPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-blog" element={<CreateBlogPage />} />
        <Route path="/edit-blog/:id" element={<EditBlogPage />} />
        <Route path="/my-blogs" element={<MyBlogsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/:id" element={<ViewBlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
