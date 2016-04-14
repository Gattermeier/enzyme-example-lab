const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Foo from '../src/Foo';

const suite = lab.suite;
const test = lab.test;
const expect = Code.expect;

suite('A suite', () => {
  test("contains spec with an expectation", (done) => {
    expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
    done();
  });

  test("contains spec with an expectation", (done) => {
    expect(shallow(<Foo />).is('.foo')).to.equal(true);
    done();
  });

  test("contains spec with an expectation", (done) => {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
    done();
  });
});
