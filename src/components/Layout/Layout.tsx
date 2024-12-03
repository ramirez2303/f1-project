import Navbar from "../Navbar";
import { LayoutWrapper } from "./style";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutWrapper>
            <Navbar />
            {children}
        </LayoutWrapper>
    );
};

export default Layout;
