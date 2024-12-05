import { useState } from "react"
export default function Trello() {
  const [card, setcard] = useState(null)

  function addCard() {
    const text = {}
  }
  return (
    <>
      <header>
        <div className="heaser-title">Trello?</div>
      </header>
      <div className="main-container">
        <div className="list-header">ギークサロン</div>
        <button>すべて削除</button>
        <div className="cards-container" id="cards-container"></div>
        <div className="list-footer">
          <div className="input-container">
            <input type="text" className="input-todo" id="input-todo" />
            <div className="input-button" id="add-button" onClick={addCard}>
              追加
            </div>
          </div>
        </div>
      </div>
      <div className="list-container">
        <div className="list-header">大学</div>
        <div className="cards-container">
          <div className="card">
            <div className="todo">これをやる</div>
            <div className="delete"></div>
          </div>
          <div className="card">
            <div className="todo">それをやる</div>
            <div className="delete"></div>
          </div>
        </div>
        <div className="list-footer">＋カードを追加</div>
      </div>
      <div className="list-container">
        <div className="list-header">家事</div>
        <div className="cards-container">
          <div className="card">
            <div className="todo">あれをやる</div>
            <div className="delete"></div>
          </div>
          <div className="card">
            <div className="todo">どれをやる</div>
            <div className="delete"></div>
          </div>
        </div>
        <div className="list-footer">＋カードを追加</div>
      </div>
    </>
  )
}
