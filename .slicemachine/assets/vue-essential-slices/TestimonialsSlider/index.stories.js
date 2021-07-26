import MyComponent from './../../../../vue-essential-slices/TestimonialsSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'vue-essential-slices/TestimonialsSlider'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"testimonials_slider","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"testimonial":[{"type":"paragraph","text":"Sit proident cillum qui in magna magna pariatur consectetur pariatur dolore cillum consequat magna eu. Velit id cupidatat laborum ex in sunt reprehenderit sit eu in ullamco nostrud.","spans":[]}],"person":"drive holistic initiatives","title":"maximize proactive metrics"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"testimonial":[{"type":"paragraph","text":"Magna eiusmod cupidatat cillum commodo ipsum laborum.","spans":[]}],"person":"reintermediate back-end convergence","title":"implement scalable functionalities"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"testimonial":[{"type":"paragraph","text":"Pariatur commodo nostrud dolore mollit. Et nulla nostrud adipisicing id cupidatat sit ut sit non excepteur.","spans":[]}],"person":"deploy dot-com action-items","title":"empower virtual applications"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"testimonial":[{"type":"paragraph","text":"Culpa Lorem qui consequat id elit ut amet do eiusmod eiusmod pariatur sit aliqua consequat et. Exercitation cupidatat culpa nostrud labore irure amet. Excepteur et qui aliquip laboris sit veniam est magna dolore occaecat non proident elit sint commodo.","spans":[]}],"person":"brand integrated e-services","title":"extend killer supply-chains"}],"primary":{"eyebrow_headline":[{"type":"paragraph","text":"Esse esse enim Lorem ipsum ut anim ipsum ullamco eiusmod aliqua. Nulla velit ea ex commodo.","spans":[]}],"title":[{"type":"heading1","text":"Extend magnetic markets","spans":[]}],"paragraph":[{"type":"paragraph","text":"Minim qui proident anim ad qui consectetur. Excepteur anim commodo in ad et ut eiusmod. Officia consectetur exercitation exercitation ex labore cupidatat et voluptate laboris id incididunt.","spans":[]}],"button_link":{"link_type":"Web","url":"https://slicemachine.dev"},"button_label":"unleash dot-com paradigms"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
