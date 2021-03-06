const apiFactoryGenerator = require('@resonate/api-factory-generator')

/**
 * REST API configuration
 * @param {object} options Options for apiFactoryGenerator
 */
const generateApi = (options) => {
  const defaultOptions = {
    scheme: 'https://',
    domain: process.env.API_DOMAIN || 'api.resonate.localhost',
    prefix: process.env.API_PREFIX || '/v1',
    auth: true,
    version: 1,
    clientId: process.env.ANON_USER,
    user: {
      uid: 0
    }
  }

  return apiFactoryGenerator({
    plays: {
      buy: {
        path: '/users/[:uid]/plays/buy',
        options: {
          method: 'POST'
        },
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            },
            tid: {
              type: 'number'
            }
          }
        }
      },
      add: {
        path: '/users/[:uid]/plays',
        options: {
          method: 'POST'
        },
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            },
            tid: {
              type: 'number'
            }
          }
        }
      }
    },
    users: {
      tracks: {
        favorites: {
          path: '/users/[:uid]/tracks/favorites',
          schema: {
            type: 'object',
            properties: {
              uid: {
                type: 'number'
              }
            }
          }
        },
        owned: {
          path: '/users/[:uid]/tracks/owned',
          schema: {
            type: 'object',
            properties: {
              uid: {
                type: 'number'
              }
            }
          }
        },
        history: {
          path: '/users/[:uid]/plays',
          schema: {
            type: 'object',
            properties: {
              uid: {
                type: 'number'
              }
            }
          }
        }
      }
    },
    auth: {
      user: {
        path: '/oauth2/user'
      },
      tokens: {
        path: '/oauth2/tokens',
        options: {
          method: 'POST'
        },
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            }
          }
        }
      },
      login: {
        path: '/oauth2/password',
        options: {
          method: 'POST'
        },
        schema: {
          type: 'object',
          properties: {
            username: {
              type: 'string'
            },
            password: {
              type: 'string'
            }
          }
        }
      }
    },
    labels: {
      query: {
        path: '/labels',
        options: {
          method: 'POST'
        },
        schema: {
          type: 'object',
          properties: {
            ids: {
              type: 'array',
              items: {
                type: 'number'
              }
            }
          }
        }
      },
      search: {
        path: '/labels',
        schema: {
          type: 'object',
          properties: {
            q: {
              type: 'string'
            }
          }
        }
      },
      find: {
        path: '/labels',
        schema: {
          type: 'object',
          properties: {
            limit: {
              type: 'number'
            }
          }
        }
      },
      findOne: {
        path: '/labels/[:uid]',
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            }
          }
        }
      },
      getArtists: {
        path: '/labels/[:uid]/artists',
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            }
          }
        }
      },
      getAlbums: {
        path: '/labels/[:uid]/albums',
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            }
          }
        }
      }
    },
    artists: {
      query: {
        path: '/artists',
        options: {
          method: 'POST'
        },
        schema: {
          type: 'object',
          properties: {
            ids: {
              type: 'array',
              items: {
                type: 'number'
              }
            }
          }
        }
      },
      search: {
        path: '/artists',
        schema: {
          type: 'object',
          properties: {
            q: {
              type: 'string'
            }
          }
        }
      },
      findOne: {
        path: '/artists/[:uid]',
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            }
          }
        }
      },
      getAlbums: {
        path: '/artists/[:uid]/albums',
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            }
          }
        }
      },
      getTracks: {
        path: '/artists/[:uid]/tracks',
        schema: {
          type: 'object',
          properties: {
            uid: {
              type: 'number'
            }
          }
        }
      }
    },
    tracklists: {
      get: {
        path: '/tracklists/[:type]',
        schema: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            limit: {
              type: 'number'
            }
          }
        }
      }
    },
    tracks: {
      search: {
        path: '/tracks',
        schema: {
          type: 'object',
          properties: {
            q: {
              type: 'string'
            }
          }
        }
      },
      favorites: {
        setFavorite: {
          path: '/users/[:uid]/tracks/favorites',
          options: {
            method: 'POST'
          },
          schema: {
            type: 'object',
            properties: {
              uid: {
                type: 'number'
              },
              tid: {
                type: 'number'
              },
              type: {
                type: 'number'
              }
            }
          }
        }
      },
      findOne: {
        path: '/tracks/[:id]',
        schema: {
          type: 'object',
          properties: {
            id: {
              type: 'number'
            }
          }
        }
      },
      get: {
        path: '/tracks',
        schema: {
          type: 'object',
          properties: {
            limit: {
              type: 'number'
            }
          }
        }
      }
    }
  }, Object.assign(defaultOptions, options))
}

module.exports = generateApi
