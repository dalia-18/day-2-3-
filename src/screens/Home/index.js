import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import {InfoContainer, RepoCard, RepoHeader} from '../../components';
import {getAllRepos} from '../../services/repos';

// const data = [
//     {
//         id:1,
//         title:'react native',
//         description:'FrameWork for mobile application developers',
//         startNumbers:1235,
//         issuesNumbers:214,
//         providerName:"facebook",
//         image:'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
//     },
//     {
//     id:2,
//         title:'react native',
//         description:'FrameWork for mobile application developers',
//         startNumbers:1235,
//         issuesNumbers:214,
//         providerName:"facebook",
//         image:'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
//     },
//     {
//         id:3,
//         title:'react native',
//         description:'FrameWork for mobile application developers',
//         startNumbers:1235,
//         issuesNumbers:214,
//         providerName:"facebook",
//         image:'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
//     },
//     {
//         id:4,
//         title:'react native',
//         description:'FrameWork for mobile application developers',
//         startNumbers:1235,
//         issuesNumbers:214,
//         providerName:"facebook",
//         image:'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
//     },
//     {
//         id:5,
//         title:'react native',
//         description:'FrameWork for mobile application developers',
//         startNumbers:1235,
//         issuesNumbers:214,
//         providerName:"facebook",
//         image:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
//     }
// ]

function Home({navigation,route}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const navigation=useNavigation();
  // const route=useRoute();
  const _onLoad = async () => {
    const _data = await getAllRepos(page);
    setData([...data, ..._data]);
    setLoading(false);
  };
  useEffect(() => {
    _onLoad();
  }, [page]);

  const renderItem = data => {
    return (
      <RepoCard
        key={data.item.id}
        title={data.item.full_name}
        description={data.item.description}
        imageSrc={data.item.owner.avatar_url}
        issuesNumber={data.item.open_issues}
        providerName={data.item.owner.login}
        starsNumber={data.item.stargazers_count}
        onPress={() =>
          navigation.navigate("Repo", {
            data: data.item,
          })
        }
      />
    );
  };

  const increasePageNumber = () => {
    setLoading(true);
    setPage(val => val + 1);
  };

  return (
    <>
      <RepoHeader text={'All repositories'} />

      {/* <View style={styles.container}>
<RepoCard/>
        </View> */}



      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReached={increasePageNumber}
        onEndReachedThreshold={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
     {loading && <ActivityIndicator size="large"/>}
    </>
  );
}

export default Home;
