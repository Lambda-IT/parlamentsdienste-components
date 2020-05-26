import notes from './readme.md';

export default {
    title: 'Typography|Colors',
    parameters: { notes },
};

export const primary = () => {
    return `
    <div class="container">
      <div class="row">
        <h1 class="mx-auto m-3">Branding</h1>
      </div>
      
      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #1e1e1e"></div>
          <div class="float-left ml-3">
            <p>BLACK</p>
            <p>#1e1e1e</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #033840"></div>
          <div class="float-left ml-3">
            <p>BLUE WHALE</p>
            <p>#033840</p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #ffffff"></div>
          <div class="float-left ml-3">
            <p>WHITE</p>
            <p>#ffffff</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #746b39"></div>
          <div class="float-left ml-3">
            <p>YELLOW METAL</p>
            <p>#746b39</p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #e3e0e0"></div>
          <div class="float-left ml-3">
            <p>BON JOUR</p>
            <p>#e3e0e0</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #46653c"></div>
          <div class="float-left ml-3">
            <p>CHALET GREEN</p>
            <p>#46653c</p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #f5f5f5"></div>
          <div class="float-left ml-3">
            <p>WILD SAND</p>
            <p>#f5f5f5</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #68888c"></div>
          <div class="float-left ml-3">
            <p>JUNIPER</p>
            <p>#68888c</p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #f8f9fa"></div>
          <div class="float-left ml-3">
            <p>ATHENS GRAY</p>
            <p>#f8f9fa</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #8c8c8c"></div>
          <div class="float-left ml-3">
            <p>GRAY</p>
            <p>#8c8c8c</p>
          </div>
        </div>
      </div>

      <div class="row">
        <h1 class="mx-auto m-3">Interaction</h1>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #0b7285"></div>
          <div class="float-left ml-3">
            <p>CYAN 9</p>
            <p>#0b7285</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #15aabf"></div>
          <div class="float-left ml-3">
            <p>CYAN 6</p>
            <p>#15aabf</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #66d9e8"></div>
          <div class="float-left ml-3">
            <p>CYAN 3</p>
            <p>#66d9e8</p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #ffd43b"></div>
          <div class="float-left ml-3">
            <p>YELLOW 4</p>
            <p>#ffd43b</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #ffec99"></div>
          <div class="float-left ml-3">
            <p>YELLOW 2</p>
            <p>#ffec99</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #fff9db"></div>
          <div class="float-left ml-3">
            <p>YELLOW 1</p>
            <p>#fff9db</p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #212529"></div>
          <div class="float-left ml-3">
            <p>GRAY 9</p>
            <p>#212529</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #868e96"></div>
          <div class="float-left ml-3">
            <p>GRAY 6</p>
            <p>#868e96</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #dee2e6"></div>
          <div class="float-left ml-3">
            <p>GRAY 3</p>
            <p>#dee2e6</p>
          </div>
        </div>
      </div>

      <div class="row">
        <h1 class="mx-auto m-3">Status</h1>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #5c940d"></div>
          <div class="float-left ml-3">
            <p>LIME 9</p>
            <p>#5c940d</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #82c91e"></div>
          <div class="float-left ml-3">
            <p>LIME 6</p>
            <p>#82c91e</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #c0eb75"></div>
          <div class="float-left ml-3">
            <p>LIME 3</p>
            <p>#c0eb75</p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #e17700"></div>
          <div class="float-left ml-3">
            <p>YELLOW 9</p>
            <p>#e17700</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #fab005"></div>
          <div class="float-left ml-3">
            <p>YELLOW 6</p>
            <p>#fab005</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #ffe066"></div>
          <div class="float-left ml-3">
            <p>YELLOW 3</p>
            <p>#ffe066</p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #c92a2a"></div>
          <div class="float-left ml-3">
            <p>RED 9</p>
            <p>#c92a2a</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #fa5252"></div>
          <div class="float-left ml-3">
            <p>RED 6</p>
            <p>#fa5252</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #ffa8a8"></div>
          <div class="float-left ml-3">
            <p>RED 3</p>
            <p>#ffa8a8</p>
          </div>
        </div>
      </div>

    </div>`;
};

export const secondary = () => {
    return `
  <div class="container">
    <div class="row">
      <h1 class="mx-auto m-3">Secondary</h1>
    </div>

    <div class="row my-3">
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #a61e4d"></div>
        <div class="float-left ml-3">
          <p>PINK 9</p>
          <p>#a61e4d</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #e64980"></div>
        <div class="float-left ml-3">
          <p>PINK 6</p>
          <p>#e64980</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #faa2c1"></div>
        <div class="float-left ml-3">
          <p>PINK 3</p>
          <p>#faa2c1</p>
        </div>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #d9480f"></div>
        <div class="float-left ml-3">
          <p>ORANGE 9</p>
          <p>#d9480f</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #fd7e14"></div>
        <div class="float-left ml-3">
          <p>ORANGE 6</p>
          <p>#fd7e14</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #ffc078"></div>
        <div class="float-left ml-3">
          <p>ORANGE 3</p>
          <p>#ffc078</p>
        </div>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #862e9c"></div>
        <div class="float-left ml-3">
          <p>GRAPE 9</p>
          <p>#862e9c</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #be4bdb"></div>
        <div class="float-left ml-3">
          <p>GRAPE 6</p>
          <p>#be4bdb</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #e599f7"></div>
        <div class="float-left ml-3">
          <p>GRAPE 3</p>
          <p>#e599f7</p>
        </div>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #5f3dc4"></div>
        <div class="float-left ml-3">
          <p>VIOLET 9</p>
          <p>#5f3dc4</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #7950f2"></div>
        <div class="float-left ml-3">
          <p>VIOLET 6</p>
          <p>#7950f2</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #b197fc"></div>
        <div class="float-left ml-3">
          <p>VIOLET 3</p>
          <p>#b197fc</p>
        </div>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #364fc7"></div>
        <div class="float-left ml-3">
          <p>INDIGO 9</p>
          <p>#364fc7</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #4c6ef5"></div>
        <div class="float-left ml-3">
          <p>INDIGO 6</p>
          <p>#4c6ef5</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #91a7ff"></div>
        <div class="float-left ml-3">
          <p>INDIGO 3</p>
          <p>#91a7ff</p>
        </div>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #1864ab"></div>
        <div class="float-left ml-3">
          <p>BLUE 9</p>
          <p>#1864ab</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #228be6"></div>
        <div class="float-left ml-3">
          <p>BLUE 6</p>
          <p>#228be6</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #74c0fc"></div>
        <div class="float-left ml-3">
          <p>BLUE 3</p>
          <p>#74c0fc</p>
        </div>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #087f5b"></div>
        <div class="float-left ml-3">
          <p>TEAL 9</p>
          <p>#087f5b</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #12b886"></div>
        <div class="float-left ml-3">
          <p>TEAL 6</p>
          <p>#12b886</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #63e6be"></div>
        <div class="float-left ml-3">
          <p>TEAL 3</p>
          <p>#63e6be</p>
        </div>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #2b8a3e"></div>
        <div class="float-left ml-3">
          <p>GREEN 9</p>
          <p>#2b8a3e</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #40c057"></div>
        <div class="float-left ml-3">
          <p>GREEN 6</p>
          <p>#40c057</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="float-left" style="width: 50px; height: 50px; border-radius: 100%; background: #8ce99a"></div>
        <div class="float-left ml-3">
          <p>GREEN 3</p>
          <p>#8ce99a</p>
        </div>
      </div>
    </div>
    
  </div>`;
};
