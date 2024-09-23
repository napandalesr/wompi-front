import React, { Suspense } from "react";
import { BrowserRouter } from 'react-router-dom';

import Loading from "../../components/Loading";
import GuardedRoute from "../../routes/guardRouter";

const Layout: React.FC = () => {
  return <div className="layout" id="layout">
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <GuardedRoute/>
      </BrowserRouter>
    </Suspense>
  </div>;
};

export default Layout;