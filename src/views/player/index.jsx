import { reactive } from 'vue'
import './index.scss';
import ProActionSheet from "./components/ProActionSheet";
import ProCircle from "./components/ProCircle";

const player = ({
    setup() {
        const state = reactive({
            actionsSheetShow: false, // 弹窗出现
            isPlay: false, // 是否播放
            rate: 10, // 播放进度
        });
        const actions = [
            { name: '选项一' },
            { name: '选项二' },
            { name: '选项三' },
        ];
        const handlePlayClick = () => {
            if (state.rate >= 100) return;
            state.rate += 10;
            state.isPlay = !state.isPlay;
        };
        const sheetClose = () => {
            state.actionsSheetShow = false;
        };
        const renderPlayIcon = () => {

            return state.isPlay ? <van-icon onClick={handlePlayClick} color='#d44439' name="pause" size={22} /> : <van-icon onClick={handlePlayClick} color='#d44439' name="play" size={22} />;
        };

        const renderMiniPlay = () => (
            <div className='miniPlay'>
                <div className="icon">
                    <div className="imgWrapper">
                        <img className="play pause"
                            src="https://p2.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg"
                            width="40" height="40" alt="img" />
                    </div>
                </div>
                <div className="text">
                    <div className="name">认真的雪</div>
                    <div className="desc">薛之谦</div>
                </div>
                <div className='console'>
                    <div>
                        <ProCircle isPlay={state.isPlay} handlePlayClick={handlePlayClick} rate={state.rate} />
                    </div>
                    <div>
                        <van-icon name="wap-nav" size="29" color="#d44439" onClick={() => { state.actionsSheetShow = true }} />
                    </div>
                </div>
            </div>
        );
        const renderActionSheet = () => {
            return state.actionsSheetShow ? <van-action-sheet v-model={[state.actionsSheetShow, ["show"]]} actions={actions} /> : null;
        };
        return () => (
            <>
                {renderMiniPlay()}
                <ProActionSheet actionsSheetShow={state.actionsSheetShow} sheetClose={sheetClose} />
            </>
        )
    }
});
export default player;