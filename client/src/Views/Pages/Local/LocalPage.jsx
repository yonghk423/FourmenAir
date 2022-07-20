import React, {useState, useEffect} from 'react'
import DummyData from '../../../Dummy/DummyData'
import Banner from './Components/Banner'
import LocalTitle from './Components/LocalTitle'
import RandomBlog from './Components/RandomBlog'


const LocalPage = () => {
  const [dummy, setDummy] = useState([])
  
  useEffect(() => {
    handleDummy()
  }, [])
  
  const handleDummy = () => {
    const filter = DummyData.filter((el) => el.url)
    setDummy(filter)
  }

    return (
    <React.Fragment>
      <Banner dummy={dummy} />
      <LocalTitle dummy={dummy} />
      <RandomBlog dummy={dummy} />
    </React.Fragment>
    )
}

export default LocalPage
