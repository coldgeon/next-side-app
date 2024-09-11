import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

//withPageAuthRequired = SSR에서 페이지 보호하기 위함(대쉬보드 페이지를 로그인한 사용자만 접근하도록 해야 하는데 얘는 SSR쪽에서 페이지 보호하는 것임)
export default withPageAuthRequired(
  async function DashboardPager() {
    const session = await getSession();

    return (
      <>
        {!!session?.user && (
          <div>
            <p>안녕하세요. {session.user.name} 님!</p>
            <button>
              <a href="/api/auth/logout">Logout</a>
            </button>
          </div>
        )}
        <div>로그인이 필요한 대쉬보드 페이지 입니다.</div>;
      </>
    );
  },
  { returnTo: '/dashboard' }
);
