import React from 'react'

export default function RankList() {

  const rankDataList = [
    {
      no: 1,
      name: '麦当劳',
      money: 5265.6,
    },
    {
      no: 2,
      name: '肯德基',
      money: 5265.6,
    },
    {
      no: 3,
      name: '汉堡王',
      money: 52525.6,
    },
    {
      no: 4,
      name: '华莱士',
      money: 1165.6,
    },
    {
      no: 5,
      name: '必胜客',
      money: 4165.6,
    },
    {
      no: 6,
      name: 'Korea fried chicken',
      money: 7165.6,
    }
  ]

  return (
    <div className="sales-view-list">
      <div className="sales-view-title">排行榜</div>
      <div className="list-item-wrapper">
        {
          rankDataList.map(item => {
             return (
               <div className="list-item flex-hc" key={item.no}>
                <div className={`list-item-no flex-hc flex-ws ${+item.no < 4 ? 'top-number' : ''}`}>
                  { item.no }
                </div>
                <div className="list-item-name">
                  { item.name }
                </div>
                <div className="list-item-money flex-1">
                  { item.money }
                </div>
              </div>
             )
          })
        }
      </div>
    </div>
  )
}
