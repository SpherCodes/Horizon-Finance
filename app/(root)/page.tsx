import React from 'react';
import HeaderBox from "@/components/ui/headerBox";
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const Home  = async () => {
  const loggedIn =  await getLoggedInUser();
  if(!loggedIn){
      redirect('/sign-in');
  }
  console.log(loggedIn);
  return (
    <section className='home'>
      <div className='home-content'>
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
        <RightSidebar 
          user = {loggedIn}
          transactions = {[]}
          banks = {[{currentBalance : 123.50},{currentBalance:500}]}
        />
    </section>
  );
}

export default Home;
