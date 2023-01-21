import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';
import { config } from '../../../ui.config';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        outlineWidth: 0,
      },

      platform: {
        web: {
          style: {
            //@ts-ignore
            cursor: 'pointer',
            userSelect: 'none',
          },
          state: {
            focusVisible: {
              style: {
                outlineWidth: 0,
                boxShadow: `${config?.tokens?.colors.primary400} 0px 0px 0px 2px`,
              },
              colorMode: {
                dark: {
                  style: {
                    boxShadow: `${config?.tokens?.colors.primary500} 0px 0px 0px 2px`,
                  },
                },
              },
            },
          },
        },
      },
      state: {
        hover: {
          style: {
            bg: '$primary800',
          },
        },
        // active: {
        //   style: {
        //     bg: '$primary900',
        //   },
        // },
        disabled: {
          style: {
            // @ts-ignore
            opacity: '0.4',
          },
        },
      },
    },

    variants: {
      solid: {
        style: {
          bg: '$primary600',
        },
        descendants: {
          _text: {
            style: {
              color: '$text50',
            },
          },
          _spinner: {
            style: {
              color: '$text50',
            },
          },
          _icon: {
            style: {
              color: '$text50',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary700',
            },
          },
          active: {
            style: {
              bg: '$primary800',
            },
          },
        },
      },
      subtle: {
        style: {
          bg: '$primary100',
        },
        colorMode: {
          dark: {
            style: {
              bg: '$primary300',
            },
          },
        },
        descendants: {
          _text: {
            style: {
              color: '$primary900',
            },
          },
          _icon: {
            style: {
              color: '$primary900',
            },
          },
          _spinner: {
            style: {
              color: '$primary900',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary200',
            },
            colorMode: {
              dark: {
                style: {
                  bg: '$primary200',
                },
              },
            },
          },
          active: {
            style: {
              bg: '$primary300',
            },
            colorMode: {
              dark: {
                style: {
                  bg: '$primary100',
                },
              },
            },
          },
        },
      },
      outline: {
        style: {
          //@ts-ignore
          bg: 'transparent',
          borderWidth: 1,
          borderColor: '$muted300',
        },
        descendants: {
          _text: {
            style: {
              color: '$primary600',
            },
          },
          _icon: {
            style: {
              color: '$primary600',
            },
          },
          _spinner: {
            style: {
              color: '$primary600',
            },
          },
        },
        colorMode: {
          dark: {
            descendants: {
              _text: {
                style: {
                  color: '$primary500',
                },
              },
              _icon: {
                style: {
                  color: '$primary500',
                },
              },
              _spinner: {
                style: {
                  color: '$primary500',
                },
              },
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary100', //replace it with alpha token
            },
          },
          active: {
            style: {
              bg: '$primary200', //replace it with alpha token
            },
          },
        },
      },
      ghost: {
        descendants: {
          _text: {
            style: {
              color: '$primary600',
            },
          },
          _icon: {
            style: {
              color: '$primary600',
            },
          },
          _spinner: {
            style: {
              color: '$primary600',
            },
          },
        },
        colorMode: {
          dark: {
            descendants: {
              _text: {
                style: {
                  color: '$primary500',
                },
              },
              _icon: {
                style: {
                  color: '$primary500',
                },
              },
              _spinner: {
                style: {
                  color: '$primary500',
                },
              },
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary200', //replace it with alpha token "$primary600:alpha10 when supported"
            },
            colorMode: {
              dark: {
                style: {
                  bg: '$primary100', //replace it with alpha token "$primary600:alpha10 when supported"
                },
              },
            },
          },
          active: {
            style: {
              bg: '$primary300', //replace it with alpha token "$primary600:alpha20 when supported"
            },
            colorMode: {
              dark: {
                style: {
                  bg: '$primary200', //replace it with alpha token "$primary600:alpha10 when supported"
                },
              },
            },
          },
        },
      },
      link: {
        descendants: {
          _text: {
            style: {
              color: '$primary600',
            },
          },
          _icon: {
            style: {
              color: '$primary600',
            },
          },
          _spinner: {
            style: {
              color: '$primary600',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: 'transparent',
            },
            descendants: {
              _text: {
                style: {
                  textDecorationLine: 'underline',
                },
              },
            },
          },
          active: {
            descendants: {
              _text: {
                style: {
                  color: '$primary800',
                  textDecorationLine: 'underline',
                },
              },
            },
          },
        },

        colorMode: {
          dark: {
            descendants: {
              _text: {
                style: {
                  color: '$primary500',
                },
              },
              _icon: {
                style: {
                  color: '$primary500',
                },
              },
            },
            state: {
              active: {
                descendants: {
                  _text: {
                    style: {
                      color: '$primary300',
                    },
                  },
                  _icon: {
                    style: {
                      color: '$primary300',
                    },
                  },
                },
              },
            },
          },
        },
      },
      unstyled: {
        style: {
          borderRadius: undefined,
        },
        descendants: {
          _text: {
            style: {
              color: '$black',
            },
          },
          _icon: {
            style: {
              color: '$black',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: 'transparent',
            },
          },
        },
      },
    },
    sizes: {
      xs: {
        style: {
          px: '$3',
          py: '$2',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 10,
            },
          },
          _icon: {
            style: {
              w: 10,
              h: 10,
            },
          },
        },
      },
      sm: {
        style: {
          px: '$3',
          py: '$2',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 12,
            },
          },
          _icon: {
            style: {
              w: 12,
              h: 12,
            },
          },
        },
      },
      md: {
        style: {
          px: '$3',
          py: '$2.5',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 14,
            },
          },
          _icon: {
            style: {
              w: 14,
              h: 14,
            },
          },
        },
      },
      lg: {
        style: {
          px: '$3',
          py: '$3',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 16,
            },
          },
          _icon: {
            style: {
              w: 16,
              h: 16,
            },
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
      variant: 'solid',
    },
  },
  {
    descendantStyle: ['_text', '_spinner', '_icon'],
  }
);
