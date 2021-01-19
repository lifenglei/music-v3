
import { onBeforeMount, reactive } from 'vue';
import { getHotSinger } from '../../api/recommendList.js'
import router from '../../router/index.js';
import { Toast } from "vant"
import './index.scss';
let loading = null
const singer = ({
    name: 'singer',
    setup(props) {
        const state = reactive({
            singerList: [],
        });
        const initPage = () => {
            getHotSinger({}).then(res => {
                if (res.code === 200) {
                    loading.clear()
                    state.singerList = res.artists
                }
            })
        };
        const goToSongList = (id) => {
            router.push({
                path: '/detail',
                query: {
                    id
                }
            })
        }
        onBeforeMount(() => {
            loading = Toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: true,
                message: "加载中..."
            });
            initPage();
        })
        const renderSpace = () => {
            return (
                <div className='spaceTitle'>
                    推荐歌手
                </div>
            )
        };
        const renderRecommendList = () => {
            return (
                <div className="recommendList">
                    {
                        state.singerList.map((item) => {
                            return (
                                <div className="recommendItem" key={item.id} onClick={() => goToSongList(item.id)}>
                                    <img
                                        src={item.picUrl}
                                        alt="" />
                                    <div className="desc">
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        };
        return () => (
            <div className="singerPage">
                { renderSpace()}
                { renderRecommendList()}
            </div>
        )
    },

});

export default singer