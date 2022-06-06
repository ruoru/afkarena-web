import './index.scss';
import React from 'react';

interface ResourcesProps {
}

interface ResourcesState {
  updateTime?: string;
  resourceValues: Array<any>;
  currentFocusIndex: number;
  currentFocusValue: number;
}

export default class Resources extends React.Component<ResourcesProps, ResourcesState> {
  constructor(props: ResourcesProps | Readonly<ResourcesProps>) {
    super(props);

    const lltcdn = 'https://lilithimage.lilithcdn.com/pub/common/afk/icon';

    this.state = {
      updateTime: '2022-06-09',
      resourceValues: [{
        text: '金币', imgUrl: `${lltcdn}/金币.jpg`, value: 1, discount: 1,
      }, {
        text: '钻石', imgUrl: `${lltcdn}/钻石.jpg`, value: 10, discount: 1,
      }, {
        text: '英雄粉尘', imgUrl: `${lltcdn}/英雄粉尘.jpg`, value: 10, discount: 1,
      }, {
        text: '梦境星辰', imgUrl: `${lltcdn}/梦境星辰.jpg`, value: 3000, discount: 1,
      }, {
        text: '升腾秘符', imgUrl: `${lltcdn}/升腾秘符.jpg`, value: 1980, discount: 1,
      }, {
        text: '增幅秘符', imgUrl: `${lltcdn}/增幅秘符.jpg`, value: 780, discount: 1,
      }, {
        text: '原初秘符', imgUrl: `${lltcdn}/原初秘符.jpg`, value: 480, discount: 1,
      }, {
        text: '元素晶核', imgUrl: `${lltcdn}/元素晶核.jpg`, value: 780, discount: 1,
      }, {
        text: '元素晶碎', imgUrl: `${lltcdn}/元素晶碎.jpg`, value: 480, discount: 0.7,
      }, {
        text: '公会币', imgUrl: `${lltcdn}/公会币.jpg`, value: 1, discount: 1,
      }, {
        text: '英灵币', imgUrl: `${lltcdn}/英灵币.jpg`, value: 1, discount: 1,
      }, {
        text: '命运金币', imgUrl: `${lltcdn}/命运金币.jpg`, value: 1, discount: 1,
      }, {
        text: '角斗士硬币', imgUrl: `${lltcdn}/角斗士硬币.jpg`, value: 3, discount: 1,
      }, {
        text: '坡尔金币', imgUrl: `${lltcdn}/坡尔金币.jpg`, value: 5, discount: 1,
      }, {
        text: '稀有英雄灵魂石', imgUrl: `${lltcdn}/稀有英雄灵魂石.jpg`, value: 300, discount: 1,
      }, {
        text: '精英英雄灵魂石', imgUrl: `${lltcdn}/精英英雄灵魂石.jpg`, value: 40, discount: 1,
      }, {
        text: '普抽卡池单抽券', imgUrl: `${lltcdn}/基础卡池单抽券.jpg`, value: 100, discount: 1,
      }, {
        text: '种族卡池单抽券', imgUrl: `${lltcdn}/特殊卡池单抽券.jpg`, value: 100, discount: 1,
      }, {
        text: '占星师单抽券', imgUrl: `${lltcdn}/占卜卡.jpg`, value: 3000, discount: 1,
      }, {
        text: '时光徽记', imgUrl: `${lltcdn}/SP卡池抽奖券.jpg`, value: 3000, discount: 1,
      }],
      currentFocusIndex: 0,
      currentFocusValue: 0,
    };
  }

  render() {
    const {
      updateTime, resourceValues, currentFocusIndex, currentFocusValue,
    } = this.state;

    const _v = resourceValues[currentFocusIndex].value * currentFocusValue;

    return (
      <div className="resources-page">
        <h2>资源转换器</h2>
        <div className="update-time">
          更新日期：{updateTime}
        </div>
        <ul className="list">
          {
            resourceValues.map((item, index) => {
              const { text, imgUrl, value, discount } = item;
              const _c = (_v / (value * discount)).toFixed(2);
              return (<li>
                <div className="img-wrap"><img alt="" src={imgUrl} /></div>
                <div className="name-wrap">
                  {text}
                </div>
                <div className="input-wrap">
                  <input
                    type="number"
                    value={index === currentFocusIndex ? currentFocusValue : _c}
                    onChange={(e) => {
                      const _v = parseFloat(e.target.value);
                      console.log(1221, _v)
                      this.setState({ currentFocusIndex: index, currentFocusValue: _v, });
                    }}
                  />
                </div>
                <div className="discount-wrap">
                  {
                    discount !== 1 && <>
                      <span className="original-price">原价：{_v / value}</span>
                      <span className="discount">（{discount * 10}折）</span>
                    </>
                  }
                </div>
              </li>)
            })
          }
        </ul>
      </div>
    );
  }
}
