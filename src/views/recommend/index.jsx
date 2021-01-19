import { reactive } from "vue";
import { getList } from "../../api/recommendList.js";
import tansNum from "../../common/common.js";
import "./index.scss";
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

const recommend = {
  name: "recommend",
  setup(props) {
    const state = reactive({
      bannerList: [],
      songList: [],
      recommendList: [],
    });
    const initPage = () => {
      getList({}).then((res) => {
        if (res.code === 200) {
          state.bannerList = res.banners;
          state.songList = res.result;
        }
      });
    };
    initPage();
    const renderSpace = () => {
      return <div className="spaceTitle">推荐歌单</div>;
    };
    const renderSwipe = () => {
      return (
        <van-swipe>
          {swipeMock.map((item) => {
            return (
              <van-swipe-item key={item.encodeId} class="swipeImg">
                <img src={item.imageUrl} alt="" />
              </van-swipe-item>
            );
          })}
        </van-swipe>
      );
    };
    const renderRecommendList = () => {
      return (
        <div className="recommendList">
          {state.songList.map((item) => {
            return (
              <div className="recommendItem" key={item.id}>
                <img src={item.picUrl} alt="" />
                <div className="playCount">
                  <van-icon name="play-circle-o" />
                  <span className="num">{tansNum(item.playCount)}</span>
                </div>
                <div className="desc">{item.name}</div>
              </div>
            );
          })}
        </div>
      );
    };
    return () => (
      <div className="recommendPage">
        {renderSwipe()}
        {renderSpace()}
        {renderRecommendList()}
      </div>
    );
  },
};

export default recommend;
