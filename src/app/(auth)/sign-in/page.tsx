import {LoginForm}  from '@/components/auth/login-form';

export function LoginPage() {
  //const [showForm, setShowForm] = useState(false);

  return (
   <div>
	<LoginForm/>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
