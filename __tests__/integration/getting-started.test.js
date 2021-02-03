import {mount} from 'enzyme'
import Index from "../../pages/getting-started";

describe("Render Getting Started Page", () => {
  it("Should render left grid", () => {
    const wrap = mount(<Index/>)
    expect(wrap.find('#left_layout')).toHaveLength(1)
  });

  it("Should render right grid", () => {
    const wrap = mount(<Index/>)
    expect(wrap.find('#right_layout')).toHaveLength(1)
  });
});