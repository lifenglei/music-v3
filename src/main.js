import {
    createApp
} from 'vue'
import App from './App.jsx'
import router from './router'
import store from './store'
import './assets/scss/init.scss';
import {
    Toast,
    Button,
    Icon,
    NavBar,
    Swipe,
    Tab,
    Tabs,
    SwipeItem,
    List,
    Tag,
    Collapse,
    CollapseItem,
    Card,
    Circle,
    ActionSheet,
    Loading
} from 'vant';
const app = createApp(App);

app.use(Swipe);
app.use(SwipeItem);
app.use(NavBar);
app.use(Icon);
app.use(Button);
app.use(Circle);
app.use(Toast);
app.use(ActionSheet);
app.use(Loading)
app.use(Card)
app.use(Collapse)
app.use(CollapseItem)
app.use(Tab)
app.use(Tabs)
app.use(Tag)


app.use(store).use(router).mount('#app');