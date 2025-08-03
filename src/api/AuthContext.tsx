import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import type { User } from "../assets/data/users";
interface LoginResponse {
  token: string;
  role: string;
}
interface AuthContextType {
  isLoggedIn: boolean;
  token: string;
  role: string;
  user: User | null;
  login: (data: LoginResponse) => Promise<void>;
  logout: () => void;
  resetAuth: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}
// Tạo context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<string>(""); // Lưu role
  const [token, setToken] = useState<string>("");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      try {
        const savedToken = localStorage.getItem("token");
        const savedRole = localStorage.getItem("role");

        if (savedToken && savedRole) {
          setToken(savedToken);
          setRole(savedRole);
          setIsLoggedIn(true);

        } else {
          setIsLoggedIn(false);

        }

      } catch (error) {
        console.error("Error reading token from localStorage:", error);
      }
    };

    checkLoginStatus();
  }, []); // Chỉ chạy một lần khi ứng dụng khởi động

  const login = async (data: LoginResponse) => {
    try {
      console.log("Check call api:", data);
      const newToken = data.token;
      const updateRole = data.role;
      console.log("Saved role Update:", updateRole);
      const now = new Date();
      const expiryTime = now.getTime() + 3600000;

      localStorage.setItem("token", newToken);
      localStorage.setItem("role", updateRole);
      localStorage.setItem("token_expiry", expiryTime.toString());
      setToken(newToken);
      setRole(updateRole); // Cập nhật role ngay lập tức
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error saving token to localStorage:", error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      localStorage.removeItem("token_expiry");
      setIsLoggedIn(false);
      setRole("");
      setUser(null);
      setToken("");
    } catch (error) {
      console.error("Error removing token from localStorage:", error);
    }
  };

  const resetAuth = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      localStorage.removeItem("token_expiry");
      setIsLoggedIn(false);
      setRole("");
      setUser(null);
      setToken("");
      
      console.log("Đã xóa token và đặt lại trạng thái đăng nhập.");
    } catch (error) {
      console.error("Không thể xóa token:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const expiryStr = localStorage.getItem("token_expiry");
      if (expiryStr) {
        const expiryTime = parseInt(expiryStr, 10);
        const now = new Date().getTime();

        if (now > expiryTime) {
          console.log("Token đã hết hạn. Đăng xuất tự động.");
          resetAuth();
          clearInterval(interval); // Dừng kiểm tra sau khi logout
        }
      }
    }, 30000); // Kiểm tra mỗi 30 giây

    return () => clearInterval(interval); // Cleanup khi component bị unmount
  }, []);


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, role, token, resetAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};
