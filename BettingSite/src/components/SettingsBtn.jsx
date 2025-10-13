
function SettingsBtn() {
  
  function OnStettingClicked() {
    alert("clicked setting btn")
  }

  return ( 
      <div className="setting-btn">
      <button className="btn" onClick={OnStettingClicked}>
        👤
      </button>
      </div>
  )
}

export default SettingsBtn
