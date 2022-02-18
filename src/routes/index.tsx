import PageLoadable from 'components/modules/Loadable/PageLoadable';

const AsyncNotFound = PageLoadable({ loader: () => import('./NotFound') });
const AsyncLogin = PageLoadable({ loader: () => import('./Login') });
const AsyncDashboard = PageLoadable({ loader: () => import('./Dashboard') });
const AsyncSignUp = PageLoadable({ loader: () => import('./SignUp') });
const AsyncForgotPassword = PageLoadable({ loader: () => import('./ForgotPassword') });
const AsyncSell = PageLoadable({ loader: () => import('./Sell') });
const AsyncAuctionList = PageLoadable({ loader: () => import('./AuctionList') });
const AsyncAuctionUnit = PageLoadable({ loader: () => import('./AuctionUnit') });
// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE

const routes = {
    LOGIN: {
        component: AsyncLogin,
        path: '/login',
        authedRoute: false
    },
    DASHBOARD: {
        component: AsyncDashboard,
        path: '/dashboard',
        authedRoute: true
    },
    SIGN_UP: {
        component: AsyncSignUp,
        path: '/sign-up',
        authedRoute: false
    },
    FORGOT_PASSWORD: {
        component: AsyncForgotPassword,
        path: '/forgot-password',
        authedRoute: false
    },
    SELL: {
        component: AsyncSell,
        path: '/sell',
        authedRoute: true
    },
    AUCTION_LIST: {
        component: AsyncAuctionList,
        path: '/auction-list',
        authedRoute: true
    },
    AUCTION_UNIT: {
        component: AsyncAuctionUnit,
        path: '/auction-unit',
        authedRoute: true
    },
    // ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE
    NOT_FOUND: {
        component: AsyncNotFound,
        path: '*',
        authedRoute: false
    }
};

export default routes;
