'use strict';

/**
 * for-clients service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::for-clients.for-clients');
