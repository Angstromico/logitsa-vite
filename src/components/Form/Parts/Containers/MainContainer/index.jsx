const MainContainer = (props) => {
  return (
    <div className='main'>
      <div className='main__hijo'>{props.children}</div>
    </div>
  )
}

export default MainContainer
