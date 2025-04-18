type TMenuItem = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};
type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

//User
type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  role?: string;
  avatar?: string;
};
export { TMenuItem, TActiveLinkProps, TCreateUserParams };
