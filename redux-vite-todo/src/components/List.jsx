
export default function List(props) {
  const todos = props.store.getState().todos
  
  const lis = todos.map((item, index) => {
    return (
      <li key={index} className='text-primary'>
        <span>{item.content}</span>
        <button type="button"  className='close'>删除</button>
      </li>
    )
  })

  return (
    <div>
      <ul style={{marginTop: 20}}>
        {lis}
      </ul>
    </div>
  )
}
