import { reactive, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { getSingerDetail } from "../../api/recommendList";
import router from "../../router/index.js";
import "./index.scss";
const Detail = {
  name: "detail",
  setup() {
    const routers = useRoute();
    const state = reactive({
      list: [{}],
      topicData: [{}],
      activeName: 1,
      crible: "",
      desc: "",
      activeNames: ["1"],
    });
    onBeforeMount(() => {
      console.log(routers.query);
      getList(routers.query);
    });
    const getList = (data) => {
      getSingerDetail(data).then((res) => {
        if (res.code === 200) {
          state.list = res.introduction;
          state.topicData = res.topicData || [];
          state.desc = res.briefDesc;
        }
      });
    };
    const handleLeftClick = () => {
      router.push({
        path: "/singer",
      });
    };
    const tabComp = () => {
      let introList;
      if (state.list.length) {
        [{}, ...introList] = state.list || [];
      }
      return state.list.length ? (
        <van-tabs v-model={state.activeTab}>
          {introList.map((item) => {
            return (
              <van-tab title={item.ti}>
                <div className="tabContent" v-text={item.txt}></div>
              </van-tab>
            );
          })}
        </van-tabs>
      ) : (
        ""
      );
    };
    const tag = (arr = []) => {
      return arr.map((item) => {
        return (
          <van-tag style="margin-right:5px;" plain size="medium" type="primary">
            {item}
          </van-tag>
        );
      });
    };
    return {
      state,
      handleLeftClick,
      tabComp,
      tag,
    };
  },

  render() {
    return (
      <div className="singerPage">
        <van-nav-bar
          title="艺人百科"
          left-text="返回"
          fixed
          left-arrow
          onClickLeft={this.handleLeftClick}
        />
        <div style="padding-top:50px;">
          {this.tabComp()}
          <van-collapse v-model={this.state.activeNames}>
            <van-collapse-item title="歌手简介" name="1">
              {this.state.desc}
            </van-collapse-item>
            {this.state.list.length ? (
              <van-collapse-item title={this.state.list[0]["ti"]} name="2">
                {this.state.list[0].txt}
              </van-collapse-item>
            ) : (
              ""
            )}
          </van-collapse>
          {this.state.topicData.map((item) => {
            return (
              <van-card
                num={item.likedCount}
                desc={item.recmdContent}
                title={item.mainTitle}
                thumb={item.coverUrl}
                v-slots={{
                  tags: () => this.tag(item.tags),
                }}
              ></van-card>
            );
          })}
        </div>
      </div>
    );
  },
};

export default Detail;
