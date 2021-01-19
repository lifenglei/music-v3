import { reactive, onBeforeMount } from "vue";
import { getSongPocketDetail } from "../../api/recommendList.js";
import { useRoute } from "vue-router";
import "./index.scss";
import router from "../../router/index.js";
import player from "../player";
// 轮播图mock数据
const swipeMock = [
  {
    id: 0,
    imageUrl:
      "http://p1.music.126.net/L2vC5tVzEGVehAtcjpZ1FQ==/109951165605310291.jpg",
  },
  {
    id: 1,
    imageUrl:
      "http://p1.music.126.net/kwHYyv9y0KutC592_Bt9TQ==/109951165611027298.jpg",
  },
];

const playDetail = {
  name: "playDetail",
  setup(props) {
    const routers = useRoute();
    const state = reactive({
      info: {
        tracks: [
          {
            ar: [{}],
          },
        ],
      },
    });
    const initPage = (data) => {
      getSongPocketDetail(data).then((res) => {
        if (res.code === 200) {
          state.info = res.playlist;
        }
      });
    };
    initPage(routers.query);
    const renderSpace = () => {
      return (
        <div className="spaceTitle">
          <img src={state.info.coverImgUrl} alt="" />
          <div className="top">
            {state.info.titleImageUrl != null ? (
              <img src={state.info.titleImageUrl} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="update">
            <span>{state.info.updateFrequency}</span>
          </div>
        </div>
      );
    };
    const handleLeftClick = () => {
      router.back();
    };
    const renderRecommendList = () => {
      return (
        <div className="playList">
          {state.info.tracks.map((item, index) => {
            return (
              <div className="playItem">
                <div className="item">
                  <div className="left">
                    <div>{index + 1}</div>
                    <div className="top">
                      <div className="name">{item.name}</div>
                      <div className="bo">
                        <div>
                          {item.ar[0]["name"]}-{item.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <van-icon name="play-circle-o" color="#575757" />
                    &nbsp;&nbsp;
                    <van-icon name="share-o" color="#575757" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
    return () => (
      <div className="viewBox">
        <van-nav-bar
          title="歌单详情"
          left-text="返回"
          fixed
          left-arrow
          onClickLeft={() => handleLeftClick()}
        />
        <div className="playPage">
          {renderSpace()}
          {renderRecommendList()}
        </div>
        <player />
      </div>
    );
  },
};

export default playDetail;
