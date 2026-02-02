import { UserProfile } from '../user/UserProfile';
import { Route, User } from '../../App';

interface ProviderProfileProps {
  navigate: (route: Route) => void;
  currentUser: User;
  logout: () => void;
}

export function ProviderProfile(props: ProviderProfileProps) {
  return <UserProfile {...props} />;
}
