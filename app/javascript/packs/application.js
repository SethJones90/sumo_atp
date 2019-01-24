// import Vue from 'vue';
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router'
import Vuex from 'vuex'

//CORE INDEX
import SumoCore from './routes/sumo_core/index'

// CORE UNITS
import SumoBasicsUnit from './routes/sumo_core/sumo_basics/index'
import SumoTroubleshootingFundamentalsUnit from './routes/sumo_core/troubleshooting_fundamentals/index'
import SumoAdvancedConceptsUnit from './routes/sumo_core/advanced_concepts/index'
import SumoMoneyUnit from './routes/sumo_core/sumo_money/index'

// CERTS (I)
import InstallingSumoCert from './routes/sumo_core/sumo_basics/installing_sumo'
import SumoBasicsCert from './routes/sumo_core/sumo_basics/sumo_basics'
import DisplayRulesBehaviorCert from './routes/sumo_core/sumo_basics/display_rules_behavior'
import OpenGraphShareCert from './routes/sumo_core/sumo_basics/open_graph_share'
import CmsFamiliarizationCert from './routes/sumo_core/sumo_basics/cms_familiarization'
import PricingFeaturesCert from './routes/sumo_core/sumo_basics/pricing_features'

// CERTS (II)
import BasicTroubleshootingCert from './routes/sumo_core/troubleshooting_fundamentals/basic_troubleshooting'
import CSSTroubleshootingCert from './routes/sumo_core/troubleshooting_fundamentals/css_troubleshooting'
import IntegrationsCert from './routes/sumo_core/troubleshooting_fundamentals/integrations'
import EscalationsCert from './routes/sumo_core/troubleshooting_fundamentals/escalations'
import CookiesCert from './routes/sumo_core/troubleshooting_fundamentals/cookies'

// CERTS (III)
import AdvancedTroubleshootingConceptsCert from './routes/sumo_core/advanced_concepts/advanced_troubleshooting_concepts'
import ArticleDetectionCert from './routes/sumo_core/advanced_concepts/article_detection'
import FormSyncCustomFormCert from './routes/sumo_core/advanced_concepts/formsync_custom_form'
import SumoLoadTimeCert from './routes/sumo_core/advanced_concepts/sumo_load_time'
import TroubleshootingPixelsCert from './routes/sumo_core/advanced_concepts/troubleshooting_pixels'

// CERTS (IV)
import HowSubscriptionsWorkCert from './routes/sumo_core/sumo_money/how_subscriptions_work_purchases_as_customer'
import ModifyingCustomerBillingCert from './routes/sumo_core/sumo_money/modifying_customer_billing'
import RefundsCancellationsCert from './routes/sumo_core/sumo_money/refunds_cancellations'
import SalesFunnelCert from './routes/sumo_core/sumo_money/sales_funnel'
import SubscribingToAndChangingPlansCert from './routes/sumo_core/sumo_money/subscribing_to_and_changing_plans'

//SUPPLEMENT INDEX
import SumoSupplements from './routes/sumo_supplements/index'

//SUPPLEMENTS
import ShortcutsSupplement from './routes/sumo_supplements/shortcuts'
import DiscountCodesSupplement from './routes/sumo_supplements/discount_codes'


document.addEventListener('DOMContentLoaded', () => {
  Vue.use(VueRouter);
  Vue.use(Vuex)
  // Vue.use(VueI18n);

  const routes = [
    { name: 'sumo_core.index', path: '/sumo_core', component: SumoCore },
        { name: 'sumo_core.sumo_basics', path: '/sumo_core/sumo_basics/', component: SumoBasicsUnit },
          { name: 'sumo_core.sumo_basics.installing_sumo', path: '/sumo_core/sumo_basics/installing_sumo', component: InstallingSumoCert },
          { name: 'sumo_core.sumo_basics.sumo_basics', path: '/sumo_core/sumo_basics/sumo_basics', component: SumoBasicsCert },
          { name: 'sumo_core.sumo_basics.display_rules_behavior', path: '/sumo_core/sumo_basics/display_rules_behavior', component: DisplayRulesBehaviorCert },
          { name: 'sumo_core.sumo_basics.open_graph_share', path: '/sumo_core/sumo_basics/open_graph_share', component: OpenGraphShareCert },
          { name: 'sumo_core.sumo_basics.cms_familiarization', path: '/sumo_core/sumo_basics/cms_familiarization', component: CmsFamiliarizationCert },
          { name: 'sumo_core.sumo_basics.pricing_features', path: '/sumo_core/sumo_basics/pricing_features', component: PricingFeaturesCert},
        { name: 'sumo_core.troubleshooting_fundamentals', path: '/sumo_core/sumo_basics/troubleshooting_fundamentals', component: SumoTroubleshootingFundamentalsUnit },
          { name: 'sumo_core.troubleshooting_fundamentals.basic_troubleshooting', path: '/sumo_core/troubleshooting_fundamentals/basic_troubleshooting', component: BasicTroubleshootingCert },
          { name: 'sumo_core.troubleshooting_fundamentals.cookies', path: '/sumo_core/troubleshooting_fundamentals/cookies', component: CookiesCert },
          { name: 'sumo_core.troubleshooting_fundamentals.css_troubleshooting', path: '/sumo_core/troubleshooting_fundamentals/css_troubleshooting', component: CSSTroubleshootingCert },
          { name: 'sumo_core.troubleshooting_fundamentals.escalations', path: '/sumo_core/troubleshooting_fundamentals/escalations', component: EscalationsCert },
          { name: 'sumo_core.troubleshooting_fundamentals.integrations', path: '/sumo_core/troubleshooting_fundamentals/integrations', component: IntegrationsCert },
        { name: 'sumo_core.advanced_concepts', path: '/sumo_core/advanced_concepts', component: SumoAdvancedConceptsUnit },
          { name: 'sumo_core.advanced_concepts.advanced_troubleshooting_concepts', path: '/sumo_core/advanced_concepts/advanced_troubleshooting_concepts', component: AdvancedTroubleshootingConceptsCert },
          { name: 'sumo_core.advanced_concepts.article_detection', path: '/sumo_core/advanced_concepts/article_detection', component: ArticleDetectionCert },
          { name: 'sumo_core.advanced_concepts.formsync_custom_form', path: '/sumo_core/advanced_concepts/formsync_custom_form', component: FormSyncCustomFormCert },
          { name: 'sumo_core.advanced_concepts.sumo_load_time', path: '/sumo_core/advanced_concepts/sumo_load_time', component: SumoLoadTimeCert },
          { name: 'sumo_core.advanced_concepts.troubleshooting_pixels', path: '/sumo_core/troubleshooting_pixels', component: TroubleshootingPixelsCert },
        { name: 'sumo_core.sumo_money', path: '/sumo_core/sumo_money', component: SumoMoneyUnit },
          { name: 'sumo_core.sumo_money.how_subscriptions_work_purchases_as_customer', path: '/sumo_core/sumo_money/how_subscriptions_work_purchases_as_customer', component: HowSubscriptionsWorkCert },
          { name: 'sumo_core.sumo_money.modifying_customer_billing', path: '/sumo_core/sumo_money/modifying_customer_billing', component: ModifyingCustomerBillingCert },
          { name: 'sumo_core.sumo_money.refunds_cancellations', path: '/sumo_core/sumo_money/refunds_cancellations', component: RefundsCancellationsCert },
          { name: 'sumo_core.sumo_money.sales_funnel', path: '/sumo_core/sumo_money/sales_funnel', component: SalesFunnelCert },
          { name: 'sumo_core.sumo_money.subscribing_to_and_changing_plans', path: '/sumo_core/sumo_money/subscribing_to_and_changing_plans', component: SubscribingToAndChangingPlansCert },
    { name: 'sumo_supplements.index', path: '/sumo_supplements', component: SumoSupplements },
      { name: 'sumo_supplements.shortcuts', path: '/sumo_supplements/shortcuts', component: ShortcutsSupplement },
      { name: 'sumo_supplements.discount_codes', path: '/sumo_supplements/discount_codes', component: DiscountCodesSupplement },
  ];


  const store = new Vuex.Store({
    state: {
      loggedIn: true
    },
    mutations: {

    }
  });

  // const i18n = new VueI18n({
  //   numberFormats
  // });
  //
  const router = new VueRouter({
    routes,
    mode: 'history'
  });

  const app = new Vue({
    router,
    store,
    components: {},
    created () {
      this.sayHello();
    },
    methods: {
      sayHello () {
        console.log("HI FROM APP!");
      }
    }
  }).$mount('#vue-app');

})
