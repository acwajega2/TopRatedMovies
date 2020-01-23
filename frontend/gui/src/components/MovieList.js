import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import {MovieConsumer} from '../components/Context'

class MovieList extends Component {
    state = {
        movies : []
    }


    render() {
        return (
            <React.Fragment>
                <div className="container">

               
                <MovieConsumer>
                    {value =>{
                        return(
                            <List
                            itemLayout="horizontal"
                            dataSource={value.movies}
                            renderItem={item => (
                              <List.Item>
                                <List.Item.Meta
                                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                  title={<a href="https://ant.design">{item.title}</a>}
                                  description={item.remarks}
                                />
                              </List.Item>
                            )}
                          />

                        )
                        
                        }

                    }

                </MovieConsumer>
                </div>
                

            </React.Fragment>

      
     
        );
    }
}

export default MovieList;