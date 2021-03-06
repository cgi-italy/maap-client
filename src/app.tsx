import React from 'react';
import { Route, useHistory } from 'react-router';

import { ThreeColumnLayout, ScrollableOverlay } from '@oidajs/ui-react-core';
import { MapComponentFromModule as MapComponent } from '@oidajs/ui-react-mobx';
import { VECTOR_VIZ_TYPE } from '@oidajs/eo-mobx';
import { DatasetAnalysesDashboard, DatasetDiscoveryDrawer } from '@oidajs/eo-mobx-react';

import { AppHeader, DatasetTimeline, DatasetLayerPane, MapMouseCoords, MapTools } from './components';
import { AppState } from './store' ;

import '../style/app.less';


export type AppProps = {
    appState: AppState;
};

export const App = (props: AppProps) => {

    const history = useHistory();

    return (
        <React.Fragment>
            <MapComponent/>
            <ThreeColumnLayout
                className='app-layout'
                left={
                    <DatasetLayerPane
                        explorerState={props.appState.datasetExplorer}
                        onAddLayerClick={() => history.push('/discovery', {updateLocationFromState: true})}
                    />
                }
                main={
                    <React.Fragment>
                        <AppHeader/>
                        <ScrollableOverlay className='analysis-scrollable-overlay'>
                            <DatasetAnalysesDashboard
                                datasetsExplorer={props.appState.datasetExplorer}
                                numCols={40}
                                rowSnapHeight={10}
                                compactType={null}
                                preventCollision={false}
                                defaultWidgetPosition={{
                                    x: 20,
                                    y: 0,
                                    w: 20,
                                    h: 20
                                }}
                                preferredLayout={{
                                    [VECTOR_VIZ_TYPE]: {
                                        position: 'br',
                                        width: 450,
                                        height: 470
                                    }
                                }}
                            />
                        </ScrollableOverlay>
                        <MapTools explorerState={props.appState.datasetExplorer}/>
                    </React.Fragment>
                }
                bottom={
                    <React.Fragment>
                        <DatasetTimeline
                            datasetExplorer={props.appState.datasetExplorer}
                        />
                        <MapMouseCoords/>
                    </React.Fragment>
                }
            />
            <Route path='/discovery'>
                <React.Fragment>
                    <DatasetDiscoveryDrawer
                        datasetDiscovery={props.appState.datasetDiscovery}
                        datasetExplorer={props.appState.datasetExplorer}
                        width={500}
                        zIndex={100}
                        onClose={() => {
                            history.push(`/`);
                        }}
                    />
                </React.Fragment>
            </Route>
        </React.Fragment>
    );
};
