import { shallowMount } from '@vue/test-utils';
import ImageBlock from '@/components/ImageBlock.vue';

describe( 'ImageBlock.vue', () => {
  const color = '#03b2f7';

  it( 'Renders default props successfully', () => {
    const wrapper = shallowMount( ImageBlock );
    expect( wrapper.props().colorCode ).toBe( color );
    expect( wrapper.props().imageName ).toBe( undefined );
    expect( wrapper.props().text ).toBe( undefined );
  } );

  it( 'Renders `text` prop when passed', () => {
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

  it( 'Renders `imageName` prop when passed with multiple values or default value when null', () => {
    const testCases = [
      { recived: null, expected: color },
      { recived: undefined, expected: color },
      { recived: '', expected: color },
      { recived: '   ', expected: color },
      { recived: 'image-name.jpg', expected: 'image-name.jpg' },
    ];
    const wrapper = shallowMount( ImageBlock );
    testCases.forEach( ( data ) => {
      wrapper.setProps( { imageName: data.recived } );
      expect( wrapper.vm.bgStyles.background ).toMatch( data.expected );
    } );
  } );
} );
