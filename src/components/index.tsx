
import React from 'react';

import { DatasetDiscoveryProviderFactory } from '@oida/eo-mobx-react';
import {
    ADAM_FEATURED_DATASET_DISCOVERY_PROVIDER_TYPE, ADAM_OPENSEARCH_DATASET_DISCOVERY_PROVIDER_TYPE,
    AdamFeaturedDatasetDiscoveryProvider, AdamOpensearchDatasetDiscoveryProvider
 } from '@oida/eo-adapters-adam';

import { AdamFeaturedDatasetDiscoveryProvider as AdamFeaturedDatasetDiscoveryProviderComponent } from './adam-featured-dataset-discovery-provider';
import { AdamOpensearchDatasetDiscoveryProvider as AdamOpensearchDatasetDiscoveryProviderComponent } from './adam-opensearch-dataset-discovery-provider';

declare module '@oida/eo-mobx-react' {
    interface DatasetDiscoveryProviderDefinitions {
        [ADAM_FEATURED_DATASET_DISCOVERY_PROVIDER_TYPE]: {
            provider: AdamFeaturedDatasetDiscoveryProvider
        };
        [ADAM_OPENSEARCH_DATASET_DISCOVERY_PROVIDER_TYPE]: {
            provider: AdamOpensearchDatasetDiscoveryProvider
        };
    }
}

DatasetDiscoveryProviderFactory.register(ADAM_FEATURED_DATASET_DISCOVERY_PROVIDER_TYPE, (config) => {
    return (
        <AdamFeaturedDatasetDiscoveryProviderComponent
            {...config}
        />
    );
});

DatasetDiscoveryProviderFactory.register(ADAM_OPENSEARCH_DATASET_DISCOVERY_PROVIDER_TYPE, (config) => {
    return (
        <AdamOpensearchDatasetDiscoveryProviderComponent
            {...config}
        />
    );
});

export * from './dataset-layer-pane';
export * from './dataset-timeline';
export * from './adam-featured-dataset-discovery-provider';
export * from './adam-opensearch-dataset-discovery-provider';
export * from './app-header';
export * from './map-mouse-coords';