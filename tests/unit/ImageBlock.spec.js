import { shallowMount } from '@vue/test-utils';
import ImageBlock from '@/components/ImageBlock.vue';

describe( 'ImageBlock.vue', () => {
  it( 'Renders default props successfully', () => {
    const color = '#03b2f7';
    const wrapper = shallowMount( ImageBlock );
    expect( wrapper.props().colorCode ).toBe( color );
    expect( wrapper.props().imageName ).toBe( undefined );
    expect( wrapper.props().text ).toBe( undefined );
  } );

  it( 'Renders text prop when passed', () => {
    const text = {
      title: 'Super Title',
      subtitle: 'Super Subtitle',
    };
    const wrapper = shallowMount( ImageBlock, {
      propsData: {
        text,
      },
    } );
    expect( wrapper.props().text ).toBe( text );
  } );
} );
