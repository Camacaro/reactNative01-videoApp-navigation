import React, { Component } from 'react';
import Video from 'react-native-video';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import Layout from '../components/layout';
import PlayPause from '../components/play-pause';
import ControlLayout from '../components/control-layout';

class Player extends Component {
    
    state = {
        loading: true,
        paused: false
    }

    onBuffer = ( {isBuffering} ) => {
        this.setState({
            loading: isBuffering
        })
    }

    onLoad = () => {
        this.setState({
            loading: false
        })
    }

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        });
    }
    
    render() {
        return (
            <Layout 
                video = {
                    <Video 
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} 
                        
                        style={styles.video}
                            
                        resizeMode='contain'

                        onBuffer = { this.onBuffer }
                        onLoad = { this.onLoad }
                        paused={ this.state.paused }
                    />
                }

                loader = {
                    <ActivityIndicator color="red"/>
                }

                loading = { this.state.loading }

                controls = {
                    <ControlLayout>
                        <PlayPause onPress= { this.playPause } paused = {this.state.paused} />
                        <Text> Progress bar | </Text>
                        <Text> time left | </Text>
                        <Text> fullscreen | </Text>
                    </ControlLayout>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right:0,
        bottom: 0,
        top: 0
    }
});

export default Player