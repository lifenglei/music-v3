import { onBeforeMount, onMounted, reactive } from "vue";
import router from "../../router/index";
import "./index.scss";
import player from "../player";
// mock数据tabBar
const tabBarMock = [
  {
    id: 0,
    title: "推荐",
    path: "/recommend",
  },
  {
    id: 1,
    title: "歌手",
    path: "/singer",
  },
  {
    id: 2,
    title: "排行",
    path: "/rank",
  },
];
const Home = {
  name: "Home",
  setup(props) {
    const state = reactive({
      list: [],
      tabBarIndex: 0,
    });
    // tabBar跳页面
    const handleWhichPath = () => {
      switch (state.tabBarIndex) {
        case 0:
          router.push("/recommend");
          break;
        case 1:
          router.push("/singer");
          break;
        default:
          break;
      }
    };
    // 导航栏搜索
    const handleNavSearch = () => {
      console.log("搜索");
    };
    // 导航栏展开
    const handleNavExtend = () => {
      console.log("下拉菜单");
    };
    // tabBar切换
    const handleTabClick = (id) => {
      console.log(id);
      state.tabBarIndex = id;
      handleWhichPath();
    };
    onMounted(() => {
      handleWhichPath();
    });
    const renderNavRight = (
      <van-icon
        name="search"
        size="18"
        color="#fff"
        onClick={() => handleNavSearch()}
      />
    );
    const renderNavLeft = (
      <van-icon
        name="wap-nav"
        size="18"
        color="#fff"
        onClick={() => handleNavExtend()}
      />
    );
    const renderTabBar = () => {
      return (
        <div className="tabBar">
          {tabBarMock.map((item) => {
            return (
              <div key={item.id} onClick={() => handleTabClick(item.id)}>
                <span
                  className={state.tabBarIndex === item.id ? "tabBarIndex" : ""}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      );
    };
    return () => (
      <div className="viewBox">
        <van-nav-bar
          title="网抑云"
          v-slots={{
            right: () => renderNavRight,
            left: () => renderNavLeft,
          }}
        />
        {renderTabBar()}
        <div className="wrapBox">
          <router-view />
        </div>
        <player />
      </div>
    );
  },
};
export default Home;
