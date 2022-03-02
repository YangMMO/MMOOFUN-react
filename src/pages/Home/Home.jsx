import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  componentDidMount() {
    console.log(1)
  }

  render() {
    return (
      <div>
        <div className='action'> <a  href="https://yangmmo.github.io/MMOOFUN-discard-/">点击此处，查看简单预览版</a></div>
        <div>mmoo.fun 域名正在部署新版react，请访问上方</div>
        <span>©2022 MMOO.FUN <a href="https://beian.miit.gov.cn/">粤ICP备17077157号</a></span>
      </div>

    )
  }

}


