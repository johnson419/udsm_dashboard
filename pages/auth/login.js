import LoginForm from '/components/LoginForm';
import { Layout as AuthLayout } from "layouts/auth/layout";


  
const Page = () => {
    
       
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};
Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default Page;
